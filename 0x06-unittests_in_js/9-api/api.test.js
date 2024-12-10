const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('API Tests', () => {
  describe('Index Page', () => {
    it('should return the correct status code for GET /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return the correct message for GET /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  describe('Cart Page', () => {
    it('should return 200 and the correct message when :id is a number', (done) => {
      chai.request(app)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return 404 when :id is not a number', (done) => {
      chai.request(app)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should return 404 for non-existent routes', (done) => {
      chai.request(app)
        .get('/cart')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
