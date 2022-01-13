export const generateNewTime = () => {
    const d = new Date();
    let hours = d.getHours();
    if (hours < 10) {
        hours = parseInt(`0${hours}`);
    }
    let minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = parseInt(`0${minutes}`);
    }
    return `${hours}:${minutes}`;
};
