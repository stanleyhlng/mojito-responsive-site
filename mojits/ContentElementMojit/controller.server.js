/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ContentElementMojit', function(Y, NAME) {

/**
 * The ContentElementMojit module.
 *
 * @module ContentElementMojit
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
            ac.models.ContentElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }

                var routes = {};
                routes['home'] = ac.url.make( 'home-page', 'index' );
                routes['about'] = ac.url.make( 'about-page', 'index' );
                routes['external'] = ac.url.make( 'external-page', 'index', "url=http%3A%2F%2Fwww.responsivewebdesign.co.uk%2F" );

                var path = ac.http.getRequest().path;
                data.is_home = (path === routes['home']);
                data.is_about = (path === routes['about']);

                data.info = {};
                data.info.name = ac.intl.lang( "TITLE" );
                data.info.content = ac.intl.lang( "CONTENT" );

                ac.composite.done({
                    template: { data: data }
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'ContentElementMojitModelFoo']});
