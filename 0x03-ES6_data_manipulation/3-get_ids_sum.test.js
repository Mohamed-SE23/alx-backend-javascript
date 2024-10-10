import getStudentIdsSum from "./3-get_ids_sum";

// Sample test case to check if getStudentIdsSum returns a sum of students ids
test('getStudentIdsSum returns an array of student IDs', () => {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const value = getStudentIdsSum(students);
    expect(value).toEqual(8);
});