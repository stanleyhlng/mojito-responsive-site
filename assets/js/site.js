(function(jQuery){

    var main = function() {

        /*
        $(this).joyride({
          "tipContent": "#page-guide-steps"
        });
        */

        setupLightBox();
        setupTour();
    };

    var setupLightBox = function() {
        jQuery('#content .article .image-container').click(function(){
            var display = $('#lightbox').css('display');
            if (display === "block") {
                $('#lightbox').css('display', 'none');
            } else {
                $('#lightbox').css('display', 'block');
            }
        });
        
        jQuery("#lightbox").click(function(){
            $('#lightbox').css('display', 'none');
        });
    }

    var setupTour = function() {
        jQuery("#banner .button").click(function(){
            jQuery(this).joyride({
                "tipContent": "#page-guide-steps"
            });
        });
    }

    jQuery( document ).ready( main );
    
}(jQuery));
