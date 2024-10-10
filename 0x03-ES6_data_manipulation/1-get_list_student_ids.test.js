import getListStudentIds from './1-get_list_student_ids';

// Sample test case to check if getListStudentIds returns an array of IDs
test('getListStudentIds returns an array of student IDs', () => {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const ids = getListStudentIds(students);
    expect(ids).toEqual([1, 2, 5]);
});