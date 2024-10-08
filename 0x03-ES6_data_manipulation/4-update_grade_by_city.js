const updateStudentGradeByCity = (students, city, newGrades) => {
    const studentsCity = students.filter((student) => student.location === city)
    const result = studentsCity.map((student) => {
                    student.grade = 'N/A';
                    newGrades.map((arr) => {
                        if (arr.studentId === student.id) return student.grade = arr.grade;
                    })

                    return student;
                })
    
    return result;
};

export default updateStudentGradeByCity;