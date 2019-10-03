/* eslint-disable no-unused-expressions */
require('dotenv').config({ path: './.env.test' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
// const Example = require('./example.db');
const { client } = require('../../db/db.client');

const should = chai.should();
chai.use(chaiHttp);

describe('Example', () => {
  
  after(async () => {
    server.close();
    // await Example.reset();
    await client.destroy();
  });

  beforeEach(async () => {
    // await Example.reset();
  });

  it('should return json on GET with example query', async () => chai
    .request(server)
    .get('/api/v1/examples')
    .send()
    .then((res) => {
      res.should.have.status(200);
      res.should.be.json;
      should.exist(res.body);
    }));

    it('should return json on GET with example query on a id', async () => chai
    .request(server)
    .get('/api/v1/examples/:id')
    .send()
    .then((res) => {
      res.should.have.status(200);
      res.should.be.json;
      should.exist(res.body);
    }));

});
