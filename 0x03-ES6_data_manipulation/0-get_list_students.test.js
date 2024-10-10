import getListStudents from "./0-get_list_students";

test('getListStudent returns an array of students', () => {
    const students = getListStudents();

    expect(students).toEqual([
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
})


