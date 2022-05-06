
    $('.list').click(function(){
         value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.itembox').show('1000');
            
        }
        else{
               $('.itembox').not('.'+ value).hide('1000');
               $('.itembox').filter('.'+ value).show('1000');
        }
        
    })
    
      $('.list').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
      })
 $('.counter').each(function () {
    $(this).prop('counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
 
    
    

