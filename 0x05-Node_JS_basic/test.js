import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './full_server/server';

process.argv[2] = './database.csv';

chai.use(chaiHttp);
chai.should();

describe('full HTTP server using Express', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () => new Promise((done) => {
      chai.request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Cannot load the database');
          done();
        });
    }));
  });
});
