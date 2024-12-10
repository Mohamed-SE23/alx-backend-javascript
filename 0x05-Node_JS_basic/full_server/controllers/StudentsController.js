import { readDatabase } from '../utils';

class StudentsController {
  // Method to get all students and display grouped by field
  static async getAllStudents(req, res) {
    const dbPath = req.query.db;
    if (!dbPath) {
      return res.status(400).send('Database path is required');
    }
    try {
      const fields = await readDatabase(dbPath);
      let response = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(fields)) {
        response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  // Method to get students by major (CS or SWE)
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const dbPath = req.query.db;
    if (!dbPath) {
      return res.status(400).send('Database path is required');
    }
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fields = await readDatabase(dbPath);
      const studentsInMajor = fields[major] || [];
      res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
export default StudentsController;
