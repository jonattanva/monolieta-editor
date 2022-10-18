export default function (blob: Blob, filename: string = 'Untitled') {
    const a = document.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', () => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
}

export const reader = (input: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            resolve(fileReader.result as string);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };

        fileReader.readAsText(input)
    });
};
