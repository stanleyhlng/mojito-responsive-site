/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('LanguagesElementMojit', function(Y, NAME) {

/**
 * The LanguagesElementMojit module.
 *
 * @module LanguagesElementMojit
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
            ac.models.LanguagesElementMojitModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.done({
                    status: 'Mojito is working.',
                    data: get_data(ac)
                });
            });
        }
    };

    function get_data(ac) {
        var data = {},
            markup = "",
            link = "#",
            name = "";

        data.name = ac.intl.lang( "TITLE" );
    
        data.items = [];

        link = ac.url.make( 'home-page', 'index', 'lang=en-US' );
        name = ac.intl.lang( 'CN' );
        markup = '<li><a title="' + name + '" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-flag-cn-24.png" /></a></li>';
        data.items.push({
            'markup': markup 
        });

        link = ac.url.make( 'home-page', 'index', 'lang=zh-Hant-HK' );
        name = ac.intl.lang( 'HK' );
        markup = '<li><a title="' + name + '" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-flag-hk-24.png" /></a></li>';
        data.items.push({
            'markup': markup 
        });

        link = ac.url.make( 'home-page', 'index', 'lang=zh-Hans-CN' );
        name = ac.intl.lang( 'US' );
        markup = '<li><a title="' + name + '" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-flag-us-24.png" /></a></li>';
        data.items.push({
            'markup': markup 
        });

        return data;
    }

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'LanguagesElementMojitModelFoo']});
