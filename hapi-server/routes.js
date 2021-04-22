'use strict';

var fs = require('fs');
var path = require('path');
var routesPath = path.join(__dirname, 'routes');
var routes = [];

fs.readdirSync(routesPath).forEach(function(route) {
    'use strict';
    if (require(routesPath + '/' + route).routes) {
        require(routesPath + '/' + route).routes.forEach(function(singleRoute) {
            routes.push(singleRoute);
        });
    }
});

module.exports = {
    routes: routes
};
