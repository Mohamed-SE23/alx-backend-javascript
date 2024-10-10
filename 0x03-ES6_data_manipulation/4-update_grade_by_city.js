export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentsCity = students.filter((student) => student.location === city);
  
    const result = studentsCity.map((student) => {
      const grade = newGrades.find((arr) => arr.studentId === student.id);
      student.grade = grade ? grade.grade : 'N/A';
      return student;
    });
  
    return result;
  }
  