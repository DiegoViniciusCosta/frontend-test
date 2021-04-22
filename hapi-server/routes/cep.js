'use strict';

var service = {},
    routes = [];
var fs = require('fs');
var path = require('path');
var cepResponse = fs.readFileSync(path.join(__dirname, '../data/cep.json'));

service = {
    getAddress: {
        description: 'Busca de CEP',
        handler: function(req, h) {
            const cep = req.params.cep;
            if (cep === '12345-678') {
                return h.response({}).code(404);
            }
            return h.response(cepResponse).code(200);
        }
    }
}

routes = [
    {
        path: '/api/cep/{cep}',
        method: 'GET',
        config: service.getAddress
    }
];

module.exports.routes = routes;
