// Import the required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express app
const app = express();
// Function to count students
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject('Cannot load the database');
      }
      // Filter out empty lines
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      const header = lines[0].split(',').map((col) => col.trim());
      const students = lines.slice(1).map((line) => {
        const values = line.split(',').map((val) => val.trim());
        const student = {};
        header.forEach((key, index) => {
          student[key] = values[index];
        });
        return student;
      });
      const fields = {};
      students.forEach((student) => {
        const { field, firstname } = student;
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });
      // Return the count and the student list grouped by field
      resolve({ students, fields });
    });
  });
};
// Route for "/"
app.get('/', (req, res) => {
  res.send('Hello ALX!');
});
// Route for "/students"
app.get('/students', (req, res) => {
  const databasePath = req.query.db; // The CSV file path is passed as a query parameter
  if (!databasePath) {
    return res.status(400).send('Database path is required');
  }
  countStudents(databasePath)
    .then(({ students, fields }) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
// Set the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
// Export the app variable
module.exports = app;
