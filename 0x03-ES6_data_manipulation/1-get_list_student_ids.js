const getListStudentIds = (arr) => {
    // Check if 'arr' is an array
    if (Array.isArray(arr)) {
        // Use .map to return a new array with just the 'id' values
        return arr.map((student) => student.id);
    }
    // If 'arr' is not an array, return an empty array
    return [];
}

export default getListStudentIds;