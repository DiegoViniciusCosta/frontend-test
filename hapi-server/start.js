'use strict';

const Hapi = require('@hapi/hapi');
const path = require('path');
const Blipp = require('blipp');
const routes = require(path.join(__dirname, 'routes')).routes;
var hapicors = require('hapi-cors');

const init = async () => {
    const server = Hapi.server({
        port: 3200,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });


    server.route(routes);

    const start = async function() {
        try {
            await server.register({plugin: Blipp, options: ''});
            await server.start();
            console.log('Server running on %s', server.info.uri);
        } catch(err) {
            console.log(err);
            process.exit(1);
        }
    };

    start();

    //await server.start();
    //console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
