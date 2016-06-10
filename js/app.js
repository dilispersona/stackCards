
$(function () {
    var map = {
        'card1': 'one',
        'card2': 'two',
        'card3': 'three',
        'card4': 'four',
        'card5': 'five',
        'card6': 'six',
        'card7': 'seven',
        'card8': 'eight',
        'card9': 'nine',
        'card10': 'ten'
    };
    var animateStack = function () {
        $('ul').removeClass('active');
        setTimeout(function(){
            $('ul').addClass('active');
        }, 300);
    };

	 $('button.next').click(function (e) {
         var key;
         $('li').removeClass('highest');

          if ($(this).parent().next().length === 0) {
              key = $('li:eq(0)').attr('id');
              $('li:eq(0)').addClass('highest');
          } else {
              $(this).parent().next().addClass('highest');
              key = $(this).parent().next().attr('id');
          }

          $('ul').attr('class', 'stack-spread ' + map[key]);
          animateStack();
   });

   $('button.prev').click(function (e) {
          var key;

          $('li').removeClass('highest');
           if ($(this).parent().prev().length === 0) {
               key = $('li:eq(9)').attr('id');
               $('li:eq(9)').addClass('highest');
           } else {
               $(this).parent().prev().addClass('highest');
               key = $(this).parent().prev().attr('id');
           }

           $('ul').attr('class', 'stack-spread ' + map[key]);
           animateStack();
    });

});
