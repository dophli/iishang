$('.spxqplTAB > li > a').click(function(){
	$('.spxqplTAB > li > a').next('div').removeClass('select_div_active');
	$(this).next('div').addClass('select_div_active');
	
})

$('.spxqplTAB1').click(function(){
	$('.maijiashaidan').css('display','block');
})
$('.spxqplTAB2').click(function(){
	$('.maijiashaidan').css('display','none');
})