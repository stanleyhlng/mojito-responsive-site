/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


/*jslint anon:true, sloppy:true*/


/**
 * Returns a new Mojito server instance.
 */
//module.exports = require('mojito').createServer();
var mojito = require('mojito');
var options = {
    'context': {
        'environment': process.env.NODE_ENV || "dev"
    }
};
new mojito.constructor().createServer(options).listen(process.env.PORT || 5000);
