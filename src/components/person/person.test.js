/* eslint-disable no-unused-expressions */
require('dotenv').config({ path: './.env.test' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');

const should = chai.should();
chai.use(chaiHttp);

describe('Person', () => {
  after((done) => {
    server.close();
    done();
  });

  it('should return simple json on /test POST', (done) => {
    chai.request(server)
      .post('/person/test')
      .send({ id: '199812240101' })
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.json;
        should.exist(res.body);
        done();
      });
  });
});
