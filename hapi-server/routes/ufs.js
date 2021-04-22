'use strict';

var service = {},
    routes = [];
var fs = require('fs');
var path = require('path');
var ufsResponse = fs.readFileSync(path.join(__dirname, '../data/ufs.json'));

service = {
    ufs: {
        description: 'Lista de UFS',
        handler: function(req, h) {
            return h.response(ufsResponse).code(200);
        }
    }
}

routes = [
    {
        path: '/api/listar-uf',
        method: 'GET',
        config: service.ufs
    }
];

module.exports.routes = routes;
