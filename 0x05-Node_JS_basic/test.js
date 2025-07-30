const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./5-http');

chai.use(chaiHttp);
chai.should();

describe('more complex HTTP server using node', () => {
  describe('/endpoint', () => {
    it('returns the right content', () => new Promise((done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Hello Holberton School!');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    }));
  });
});
