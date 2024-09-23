const formatDate = (dateStr) => {
    if (dateStr) {
        // Split the input date string by the hyphen
        let parts = dateStr.split("-");
    
        // Rearrange the parts from dd-mm-yyyy to yyyy-mm-dd or vice versa
        let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    
        return formattedDate;
    }
}

export default formatDate