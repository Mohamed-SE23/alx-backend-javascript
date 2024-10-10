import getStudentsByLocation from "./2-get_students_by_loc";

// Sample test case to check if getListStudentsByLocation returns an array of students location
test('getListStudentsByLocation returns an array of student locations', () => {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const location = getStudentsByLocation(students, 'San Francisco');
    expect(location).toEqual([
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
      ]);
});