import type { Option } from './type';

export const thumbnail = (video: CanvasImageSource, option: Option) => {
    const canvas = document.createElement('canvas');
    canvas.width = option.width;
    canvas.height = option.height;

    const context = canvas.getContext('2d');
    if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/jpeg');
    }
    return null;
};

export const reader = (
    source: File | string,
    option: Option
): Promise<string> => {
    // prettier-ignore
    const { 
        interval = 1 
    } = option;

    return new Promise((resolve, reject) => {
        if (typeof source === 'string') {
            resolve(source);
            return;
        }

        const video = document.createElement('video');
        video.onloadeddata = () => {
            const url = thumbnail(video, option);
            if (url) {
                resolve(url);
            }
        };

        video.muted = true;
        video.volume = 0;
        video.onabort = reject;
        video.currentTime = interval;
        video.src = URL.createObjectURL(source);
    });
};
