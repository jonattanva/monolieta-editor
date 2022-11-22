function isArray(value: any) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

function reader(input: File) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            resolve(fileReader.result as string);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };

        fileReader.readAsText(input);
    });
}

const getJson = (value: string) => {
    try {
        return JSON.parse(value);
    } catch (_) {
        return null;
    }
};

const getColumnsFromCSV = (columns: string) =>
    columns.split(',').map((column) => ({
        label: column,
        value: column
    }));

const getColumnsFromJson = (value: any): Monolieta.Options | Monolieta.Groups => {
    let properties = value;
    if (isArray(properties)) {
        const property = properties[0];
        return Object.keys(property).map((name) => ({
            label: name,
            value: name
        }));
    }

    return Object.keys(properties).map((name) => {
        let property = properties[name];
        if (isArray(property)) {
            property = property[0];
        }

        return {
            label: name,
            value: name,
            options: Object.keys(property).map((name) => ({
                label: name,
                value: name
            }))
        };
    });
};

const getContentFromCSV = (columns: Monolieta.Options, content: any[]) => {
    const result = [];
    for (let i = 0; i < content.length; i++) {
        const row = content[i];
        const values = row.split(',');

        if (values.length !== columns.length) {
            continue;
        }

        const register = columns.reduce(
            (previous, current, index) => ({
                ...previous,
                [current.value]: values[index]
            }),
            {}
        );

        result.push(register);
    }

    return result;
};

onmessage = async (event) => {
    const { data } = event;

    const file = data.file;
    const result = (await reader(file)) as string;

    const body: Monolieta.LabelReader = {
        columns: [],
        content: []
    };

    postMessage({
        state: 'processing',
        body
    });

    switch (file.type) {
        case 'application/json': {
            const content = getJson(result);
            if (!content) {
                postMessage({
                    state: 'warning',
                    message: 'It was not possible to import the file'
                });
                return;
            }

            body.content = content;
            body.columns = getColumnsFromJson(content);
            break;
        }
        case 'text/csv': {
            const [columns, ...content] = result.split('\n');

            body.columns = getColumnsFromCSV(columns);
            body.content = getContentFromCSV(body.columns, content);
            break;
        }
    }

    postMessage({
        state: 'complete',
        body
    });
};

export {};
