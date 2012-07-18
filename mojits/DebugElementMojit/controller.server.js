/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('DebugElementMojit', function(Y, NAME) {

/**
 * The DebugElementMojit module.
 *
 * @module DebugElementMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.DebugElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

                data.info = {};
                data.info.name = ac.intl.lang( "TITLE" );

                var content = "";
                content += "<h4>app.context</h4>";
                Object.keys(ac.app.config.custom).forEach(function(key) {
                    content += key + ":" + ac.app.config.custom[key];
                    content += "<br />";
                });

                content += "<h4>mojit.context</h4>";
                Object.keys(ac.config._config).forEach(function(key) {
                    content += key + ":" + ac.config._config[key];
                    content += "<br />";
                });
                data.content = content;

                Y.log(ac.app.config.custom, "DEBUG");
                Y.log(ac.config._config, "DEBUG");

                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'mojito-config-addon', 'DebugElementMojitModelFoo']});
