export const reader = (source: File | string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if ('string' === typeof source) {
            resolve(source);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
            const target = event.target as FileReader;
            resolve(target.result as string);
        };
        reader.onabort = reject;
        reader.readAsDataURL(source);
    });
};
