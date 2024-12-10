import fs from 'fs';
import path from 'path';

export function readDatabase(filePath) {
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
      // Group students by field
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
      // Sort fields by name and students within each field
      const sortedFields = Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .reduce((obj, key) => {
          obj[key] = fields[key];
          return obj;
        }, {});
      resolve(sortedFields);
    });
  });
}
