/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('AboutPageMojit', function(Y, NAME) {

/**
 * The AboutPageMojit module.
 *
 * @module AboutPageMojit
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
            ac.models.AboutPageMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

                /*
                ac.assets.addCss('./index.css');
                
                data.mojito = {};
                data.mojito.mojit = "AboutPageMojit";

                ac.done({
                    status: 'mojit: AboutPageMojit',
                    data: data
                });
                */
                ac.composite.done();
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'AboutPageMojitModelFoo']});
