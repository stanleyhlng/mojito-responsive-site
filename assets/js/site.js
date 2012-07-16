/*globals jQuery */
(function (jQuery) {

    "use strict";

    var main = function () {

        jQuery(this).joyride({
            /* Options will go here */
            "tipContent": "#page-guide-steps"
        });

    };

    jQuery(document).ready(main);

}(jQuery)); /* Predefined ( jQuery, $ ) */
