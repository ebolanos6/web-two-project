$( document ).ready(function() {

    $('button').click(function () {
        $('h1').addClass('hide');
        });

    $('button').click(function () {
        $('h1').removeClass('show');
        })
            
    setTimeout(function () {
         $('h1').addClass('show');
        }, 2000);
                
               
})