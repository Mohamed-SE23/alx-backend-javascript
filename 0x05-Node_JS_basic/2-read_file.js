const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    // Split the data into lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    // Ensure the file has a header and at least one student
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }
    // Extract header and student data
    const header = lines[0].split(',').map((col) => col.trim());
    const students = lines.slice(1).map((line) => {
      const values = line.split(',').map((val) => val.trim());
      const student = {};
      header.forEach((key, index) => {
        student[key] = values[index];
      });
      return student;
    });
    // Log the total number of students
    console.log(`Number of students: ${students.length}`);
    // Group students by field
    const fields = {};
    students.forEach((student) => {
      // Destructure the field and firstname properties
      const { field, firstname } = student;
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });
    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
