export const getOrdinalSuffix = (number) => {
    if (number >= 11 && number <= 13) {
        return 'th';
    }
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const year = date.getFullYear().toString().slice(-2);

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
};
