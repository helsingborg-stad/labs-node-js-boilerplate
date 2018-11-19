const express = require('express');
const router = express.Router();

router.use('/getPerson', require('./person/personApi'));
router.use('/testbankid', require('./bankid-auth/bankidApi'));

module.exports = router;