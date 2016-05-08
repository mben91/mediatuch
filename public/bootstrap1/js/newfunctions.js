$(document).ready(function() {
 

/* Hide form input values on focus*/ 
    $('input[type="text"]').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });

     $('textarea').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });


/* need prescription */

    $("#needprescription ").hover(function () {
        $(this).attr("src","images/needprescriptionhover.jpg");
        $(this).css({"-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
        $(".prescription h3").css({"color": "#f8d304","-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
        $(".prescription .container").css({"background": "#171717","-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
    },
    function () {
        $(this).attr("src","images/needprescription.jpg");
        $(this).css({"-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
        $(".prescription h3").css({"color": "#171717","-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
        $(".prescription .container").css({"background": "#f8d304","-moz-transition": "all 0.3s linear","-webkit-transition":"all 0.3s linear","transition":"all 0.3s linear"});
    });


/* onfocus */
$('#service-detail').click(function() {
    $(this).css({
        'background-color': '#171717',
        'color': 'white'
    });

});




$('input').iCheck({
    checkboxClass: 'icheckbox_flat-yellow'
});



// external js: isotope.pkgd.js


  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    /*layoutMode: 'fitRows'*/
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  








});
