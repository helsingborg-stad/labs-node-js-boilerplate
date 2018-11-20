const router = require('express').Router();
const dalPerson = require('./dalPerson');
const async = require('async');
const await = require('await');
const Player = require('./personModel');
soapRequest = require('easy-soap-request');


/*
not yet implemented in boiler
const SchemaValidator = require('../middlewares/schemaValidators');
const validateRequest = SchemaValidator(true);
*/
//changed to get temp, it was post
router.get('/',/*validateRequest,*/ async (req, res) => {
    console.log("getPerson EndPoint")
    /*
    const { name } = req.body;
    const newPlayer = new Player(1000, name);
    */
    try {
        //removed input for the savePlayer method below
        return res.json(await dalPerson.getPerson());
    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

module.exports = router;

