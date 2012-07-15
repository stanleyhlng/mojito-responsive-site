/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('DevicesElementMojit', function(Y, NAME) {

/**
 * The DevicesElementMojit module.
 *
 * @module DevicesElementMojit
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
            ac.models.DevicesElementMojitModelFoo.getData(function(err, data) {
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
            link = "http://quirktools.com/screenfly/",
            name = "";

        data.name = ac.intl.lang( "TITLE" );
    
        data.items = [];

        name = ac.intl.lang( 'DESKTOP' );
        markup = '<li><a target="_blank" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-desktop.png" /><div>' + name + '</div></a></li>';
        data.items.push({
            'markup': markup 
        });

        name = ac.intl.lang( 'TABLET' );
        markup = '<li><a target="_blank" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-tablet.png" /><div>' + name + '</div></a></li>';
        data.items.push({
            'markup': markup 
        });

        name = ac.intl.lang( 'MOBILE' );
        markup = '<li><a target="_blank" href="' + link + '"><img src="/static/responsive_site/assets/img/icon-mobile.png" /><div>' + name + '</div></a></li>';
        data.items.push({
            'markup': markup 
        });

        return data;
    }

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'DevicesElementMojitModelFoo']});
