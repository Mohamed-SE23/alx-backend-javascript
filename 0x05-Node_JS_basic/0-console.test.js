// Import the function to be tested
const displayMessage = require('./0-console');

// Mock process.stdout.write
jest.spyOn(process.stdout, 'write').mockImplementation(() => {});

describe('displayMessage', () => {
  afterEach(() => {
    // Clear mock history after each test
    process.stdout.write.mockClear();
  });

  test('should write the correct message to stdout', () => {
    const message = 'Hello, World!';
    displayMessage(message);

    // Assert that process.stdout.write was called with the expected output
    expect(process.stdout.write).toHaveBeenCalledWith(`${message}\n`);
  });

  afterAll(() => {
    // Restore original implementation of process.stdout.write
    process.stdout.write.mockRestore();
  });
});
