import express from 'express';
import routes from './routes';

const app = express();
// Use the routes
app.use(routes);
// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Export the app for testing
export default app;
