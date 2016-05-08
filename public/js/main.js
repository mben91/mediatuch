$(document).ready(function() {
   
    var paused = false;
    
    setTimeout(function() {
        var first = true;
        var index = 1;
        
        slider(index);
        
        setInterval(function() {
            
            if(!paused) {
                
                if($('.slider .slide-item').size() > index) {
                    index++;
                } else {
                    index = 1;
                }
                slider(index);
            }
            
        }, 5000);
        
        $('.slider .navigation').on('click', '.next:not(.disabled)', function() {
            index++;
            slider(index);
        });
        
        $('.slider .navigation').on('click', '.prev:not(.disabled)', function() {
            index--;
            slider(index);
        });
        
    }, 1000);
    
    $('.slider .navigation *').hover(
        function() {
            paused = true;
        },
        function() {
            paused = false;
        }
    );
    
    
});

function slider(index) {
    
    if(index == 1) {
        $('.slider .navigation .next').removeClass('disabled');
        $('.slider .navigation .prev').addClass('disabled');
    } else if(index == $('.slider .slide-item').size()) {
        $('.slider .navigation .next').addClass('disabled');
        $('.slider .navigation .prev').removeClass('disabled');
    } else {
        $('.slider .navigation .next').removeClass('disabled');
        $('.slider .navigation .prev').removeClass('disabled');
    }
    
    
    $('.slider .slide-item .container').animate({ opacity : 0 }, 200, function() {
        $(this).hide();
        
        $('.slider h1').stop().removeAttr('style');
        $('.slider h3').stop().removeAttr('style');
        $('.slider .sl-img').stop().removeAttr('style');
        $('.slider ul li').stop().removeAttr('style');
    });
    
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