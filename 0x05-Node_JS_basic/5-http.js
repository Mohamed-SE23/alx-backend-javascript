const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Define the database file path from command-line arguments
const databaseFilePath = process.argv[2] || '';
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    // Handle the root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (parsedUrl.pathname === '/students') {
    // Handle the students path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      // Use the countStudents function
      const studentSummary = await countStudents(databaseFilePath);
      res.end(studentSummary);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    // Handle unknown paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
