$(document).ready(function() {
   
    setTimeout(function() {
        var first = true;
        var index = 1;
        
        slider(index);
        index++;
        
        setInterval(function() {
            slider(index);
            if($('.slider .slide-item').size() > index)
            index++;
            else 
            index = 1;
        }, 5000);
        
    }, 1000);
    
    
});

function slider(index) {
    
    $('.slider .slide-item .container').animate({ opacity : 0 }, 200, function() {
        $(this).hide();
    });
    
    $('.slider .slide-' +index+ ' h1').removeAttr('style');
    $('.slider .slide-' +index+ ' h3').removeAttr('style');
    $('.slider .slide-' +index+ ' .sl-img').removeAttr('style');
    $('.slider .slide-' +index+ ' ul li').removeAttr('style');
    
    setTimeout(function() {
    $('.slider .slide-' +index+ ' .container').show();
    $('.slider .slide-' +index+ ' .container').animate({ opacity : 1 }, 200, function() {
        $('.slider .slide-' +index+ ' h3').animate({ marginTop: '0px', opacity: '1'}, 400);
        $('.slider .slide-' +index+ ' h1').animate({ marginTop: '0px', opacity: '1'}, 300, function() {

            setTimeout(function() {
                $('.slider .slide-' +index+ ' .sl-img').animate({ top: '0px', right: '0px', opacity: '1', transform: 'rotate(0deg)' }, 600);
            }, 0);

            $('.slider .slide-' +index+ ' ul li').each(function(i, item) {     

                setTimeout(function() {
                $(item).animate({ 
                    marginLeft : '0px', 
                    width: '240px',
                    height: '5px',
                    opacity: '1',
                }, 150, function() {
                    $(this).animate({
                        height: '30px',
                        padding: '5px'
                    }, 150);
                });
                }, 200*i);

            });

        });
        
    });
    }, 500);
}