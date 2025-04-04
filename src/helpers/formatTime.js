export const formatTime = (time) => {
    const date = new Date(time);
    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, '0');

    return `${hours}:${minutes} ${period}`;
};
