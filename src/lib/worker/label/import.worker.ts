function isObject(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: any) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

function template() {
    return {
        id: null,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        name: '',
        color: null,
        token: null
    };
}

onmessage = (event) => {
    const { data } = event;

    const labels = [];
    for (let i = 0; i < data.groups.length; i++) {
        const group = data.groups[i];

        let contents = data.content;
        if (isObject(contents) && group.property) {
            contents = data.content[group.property];
        }

        if (!isArray(contents)) {
            break;
        }

        const body = <Array<any>>contents;
        for (let k = 0; k < body.length; k++) {
            const content = body[k];

            let label = template();
            for (let j = 0; j < data.columns.length; j++) {
                const column = data.columns[j];

                const ref = data.ref[column];
                label = {
                    ...label,
                    [column]: content[ref.property]
                };
            }

            labels.push(label);
        }
    }

    postMessage({
        labels
    });
};

export {};
