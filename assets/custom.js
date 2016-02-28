$(document).ready(function() {
  $('.one_time_radio_btn').prop('checked', true);
  $('.mixed_radio_btn').prop('checked', false);
  
  $('.one_time_radio_btn,.mixed_radio_btn').change(function(){
    if($('.one_time_radio_btn').is(':checked')){
        $('.one_time_div').css('background','#f5f5f5');
    }
    else if($('.one_time_radio_btn').not(':checked')){
        $('.one_time_div').css('background','#ffffff');
    }

    if($('.mixed_radio_btn').is(':checked')){
        $('.recurring_div').css('background','#f5f5f5');
    }
    else if($('.mixed_radio_btn').not(':checked')){
        $('.recurring_div').css('background','#ffffff');
    }
  });
  $('.product_wrap #purchase .buy-option label input[type="radio"]').prop('checked', false);
  $('.product_wrap #purchase .buy-option label input[type="radio"]').change(function(){
    if($(this).is(':checked')){
      	$('.product_wrap #purchase .buy-option label input[type="radio"]').parent().css('background','#ffffff');
    	$(this).parent().css('background','#f5f5f5');
    }
//     else{
//     	$(this).parent().css('background','#ffffff');
//     }
  })
});

