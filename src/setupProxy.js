const proxy = require('http-proxy-middleware');



const API_URL_LOC = 'http://localhost:7000'; // local

// const PRE_FIXED_API = '/Service01';
const PRE_FIXED_API = ['/BoilerPlate/api/v1',];

const API_URL = API_URL_LOC;
module.exports = function(app) {
    app.use(proxy(PRE_FIXED_API,
        { target:API_URL }
    ));
};
