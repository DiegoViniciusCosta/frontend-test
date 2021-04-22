'use strict';

var service = {},
    routes = [];
var fs = require('fs');
var path = require('path');
var res = fs.readFileSync(path.join(__dirname, '../data/cities.json'));

service = {
    getCities: {
        description: 'Busca de Cidades',
        handler: function(req, h) {
            return h.response(res).code(200);
        }
    }
}

routes = [
    {
        path: '/api/cidades/{uf}',
        method: 'GET',
        config: service.getCities
    }
];

module.exports.routes = routes;
