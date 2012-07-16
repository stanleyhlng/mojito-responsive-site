/*globals jQuery */
(function (jQuery) {

    "use strict";

    function getWindowHeight() {
        var doc = document.documentElement;
        return self.innerHeight || (doc && doc.clientHeight) || document.body.clientHeight;
    }

    function getObjectHeight(obj) {
        if (obj.offsetWidth) {
            return obj.offsetHeight;
        }
        return obj.clientHeight;
    }

    function resize() {
        var el = jQuery('#frame');
        if (el) {
            el.hide();
            el.height(getWindowHeight() - getObjectHeight(document.getElementById('toolbar')));
            el.show();
        }
    }

    function main() {
        resize();
    }

    jQuery(document).ready(main);

    jQuery(window).resize(function () {
        resize();
    });

}(jQuery));
