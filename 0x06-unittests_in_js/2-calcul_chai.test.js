const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are (1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-6);
    });

    it('should handle one negative and one positive number', () => {
      expect(calculateNumber('SUM', -1.5, 3.7)).to.equal(2);
    });

    it('should handle 0 correctly', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are (1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(2);
    });

    it('should handle one negative and one positive number', () => {
      expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.equal(-6);
    });

    it('should handle 0 correctly', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are (1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.be.closeTo(0.5, 0.001);
    });

    it('should handle one negative and one positive number', () => {
      expect(calculateNumber('DIVIDE', -1.5, 3.7)).to.be.closeTo(-0.5, 0.001);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
