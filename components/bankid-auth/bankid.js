/* eslint-disable no-undef */
const axios = require('axios');
const https = require('https');
var fs = require('fs');
const apiUrl = 'https://appapi2.test.bankid.com/rp/v5';

exports.test = () => {
    return new Promise((resolve, reject) => {
        console.log('bankid');

        const response = axios.get(apiUrl, { httpsAgent }).then(response => {
            if (response.data) {
                console.log(response.data);
            }
        })
            .catch(error => {
                console.log(error);
            });

        resolve({ reply: response.data.Error });

        if (err) {
            return reject(err);
        } else {
            resolve(reply);
        }
    });
};

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    cert: fs.readFileSync(__basedir + '/assets/certificates/bankid/bankid.cer'),
    passphrase: 'qwerty123'
});
