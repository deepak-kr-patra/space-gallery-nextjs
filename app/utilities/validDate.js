const validDate = (dateStr) => {
    if (dateStr) {
        const dateObj = new Date(dateStr);
        const startDateObj = new Date("1995-06-16");
        const todayDateObj = new Date();

        // Check if date is within the range
        return dateObj >= startDateObj && dateObj <= todayDateObj;
    }
}

export default validDate