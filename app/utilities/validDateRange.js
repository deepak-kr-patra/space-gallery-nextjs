import toast from "react-hot-toast";


const validDateRange = (startDateStr, endDateStr) => {
    const startDateObj = new Date(startDateStr);
    const endDateObj = endDateStr ? new Date(endDateStr) : new Date();

    if (startDateObj > endDateObj) {
        toast.error("End date cannot exceed start date");
        return false;
    }

    const difference = endDateObj - startDateObj;
    const diffInDays = difference / 1000 / 60 / 60 / 24;

    console.log(diffInDays);
    if (diffInDays >= 10) {
        toast.error("Enter range within 10 days max");
        return false;
    }

    return true;
}

export default validDateRange