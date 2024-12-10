const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;
chai.use(chaiHttp);

describe('Index page', () => {
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

  it('should handle other cases if needed (optional test)', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.header('content-type', /html/);
        done();
      });
  });
});
