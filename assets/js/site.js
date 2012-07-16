(function(jQuery){

    var main = function() {

        /*
        $(this).joyride({
          "tipContent": "#page-guide-steps"
        });
        */

        setupLightBox();
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

    jQuery( document ).ready( main );
    
}(jQuery));
