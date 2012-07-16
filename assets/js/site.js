(function(jQuery){

    var main = function() {

        /*
        $(this).joyride({
          "tipContent": "#page-guide-steps"
        });
        */

        setupLightBox();
        setupTour();
        showHideGuides();
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
    };

    var setupTour = function() {
        jQuery("#banner .button").click(function(){
            jQuery(this).joyride({
                "tipContent": "#page-guide-steps"
            });
        });
    };

    var showGuide = true;
    var showHideGuides = function() {
        jQuery("#logo").click(function() {
            if (showGuide) {
                jQuery('.guide-page').css('border-color', 'rgba(0,0,255,1)');
                jQuery('.guide-section').css('border-color', 'rgba(255,0,0,1)');
                jQuery('.guide-element').css('border-color', 'rgba(255,0,255,1)');
            } else {
                jQuery('.guide-page').css('border-color', 'rgba(0,0,255,0)');
                jQuery('.guide-section').css('border-color', 'rgba(255,0,0,0)');
                jQuery('.guide-element').css('border-color', 'rgba(255,0,255,0)');
            }
            showGuide = !showGuide;
        });
    };

    jQuery( document ).ready( main );
    
}(jQuery));
