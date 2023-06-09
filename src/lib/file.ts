export default function (blob: Blob, filename = 'Untitled') {
    const a = document.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', () => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
}

export const imageReader = (source: File | string): Promise<string> => {
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
