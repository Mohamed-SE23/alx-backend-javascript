const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });

  it('should handle one negative and one positive number', () => {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 2);
  });

  it('should handle 0 correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round numbers very close to 0.5 up', () => {
    assert.strictEqual(calculateNumber(0.499, 0.501), 1);
  });
});
