'use strict';

var service = {},
    routes = [];

service = {
    salvar: {
        description: 'SALVAR',
        handler: function(req, h) {
            return h.response({ id: 4353323 }).code(200);
        }
    }
}

routes = [
    {
        path: '/api/salvar',
        method: 'POST',
        config: service.salvar
    }
];

module.exports.routes = routes;
