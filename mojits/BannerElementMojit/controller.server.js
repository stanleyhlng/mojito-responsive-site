/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('BannerElementMojit', function(Y, NAME) {

/**
 * The BannerElementMojit module.
 *
 * @module BannerElementMojit
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
            ac.models.BannerElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                
                data.info = {};

                data.info.name = ac.intl.lang( 'TITLE' );
                data.caption = ac.intl.lang( 'CAPTION' );
                data.button_name = ac.intl.lang( 'BUTTON_NAME' );

                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'BannerElementMojitModelFoo']});
