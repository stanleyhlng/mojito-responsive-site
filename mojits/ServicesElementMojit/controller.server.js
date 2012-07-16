/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ServicesElementMojit', function(Y, NAME) {

/**
 * The ServicesElementMojit module.
 *
 * @module ServicesElementMojit
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
            ac.models.ServicesElementMojitModelFoo.getData(function(err, data) {
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
            link = "",
            name = "";

        data.items = [];
        
        name = "Hosted";
        data.items.push({
            'markup': '<li><img src="/static/responsive_site/assets/img/icon-manhattan.png" /><div>' + name + '</div></li>'
        });

        name = "Powered";
        data.items.push({
            'markup': '<li><img src="/static/responsive_site/assets/img/icon-yahoo.png" /><div>' + name + '</div></li>'
        });

        return data;
    }

}, '0.0.1', {requires: ['mojito', 'mojito-intl-addon', 'ServicesElementMojitModelFoo']});
