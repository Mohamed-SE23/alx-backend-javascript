const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -6);
    });

    it('should handle one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, 3.7), 2);
    });

    it('should handle 0 correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 2);
    });

    it('should handle one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 3.7), -6);
    });

    it('should handle 0 correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.7), 0.5);
    });

    it('should handle one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, 3.7), -0.5);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
