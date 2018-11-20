const router = require('express').Router();
const bankid = require('./bankid');

router.get('/', async (req, res) => {
    console.log('bankidapi');
    try {
        return res.json(
            await bankid.test()
        );
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

module.exports = router;
