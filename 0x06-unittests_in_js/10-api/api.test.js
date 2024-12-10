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
  });

  describe('/available_payments Endpoint', () => {
    it('should return the correct status code and object', (done) => {
      chai.request(app)
        .get('/available_payments')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        });
    });
  });

  describe('/login Endpoint', () => {
    it('should return 200 and the correct message for valid userName', (done) => {
      chai.request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });

    it('should return 400 for missing userName in the body', (done) => {
      chai.request(app)
        .post('/login')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.text).to.equal('Missing userName');
          done();
        });
    });
  });
});
