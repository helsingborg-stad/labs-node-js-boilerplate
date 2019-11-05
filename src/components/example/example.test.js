//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Examples', () => {
  /*
  * Test the /GET route
  */
  describe('/GET examples', () => {
      it('it should GET all the examples', (done) => {
        chai.request(app)
            .get('/api/v1/examples')
            .end((err, res) => {
              chai.expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
              res.should.have.status(200);
              done();
            });
      });
  });

  describe('/GET/:id example', () => {
      it('it should GET a single example', (done) => {
        chai.request(app)
            .get('/api/v1/examples/1')
            .end((err, res) => {
              chai.expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
              res.should.have.status(200);
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */

  describe('/POST example', () => {
    it('it should POST a single example', (done) => {
        let example = {
            title: "Test post",
            body: "A sexy body that does not define the act of sex between humans or mammals"
        }
      chai.request(app)
          .post('/api/v1/examples')
          .send(example)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.json;
                res.body.should.have.property('title');
                res.body.should.have.property('body');
            done();
          });
    });

});

});
