import updateStudentGradeByCity from "./4-update_grade_by_city";

// Sample test case to check if updateStudentGradeByCity returns a new array with students grade in specified city
test('updateStudentGradeByCity returns a new array of students grade in specified city', () => {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    const update = updateStudentGradeByCity(students, "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]);
    expect(update).toEqual([
        {
          id: 1,
          firstName: 'Guillaume',
          location: 'San Francisco',
          grade: 86
        },
        { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
      ]);
});