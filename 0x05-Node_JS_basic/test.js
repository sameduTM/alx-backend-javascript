import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './full_server/server';

process.argv[2] = './database.csv';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    })
    it('Returns the right error message', (done) => {
      chai.request(app)
        .get('/students/SWE')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`Cannot load the database`);
          done();
        });
    });
  });
});
