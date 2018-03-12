$(function(){
	$('.spxqSelectDiv label').addClass("label_old");
	$('.spxqSelectDiv .smallw0 label').click(function(){
		$(this).toggleClass("label_new")
		if($(this).hasClass("label_new")){
			var len=$('.spxqSelectDiv .smallw1 label').length;
			for(var ind=0;ind<len;ind++){
				if($('.spxqSelectDiv .smallw1 label').eq(ind).hasClass("label_new")){
					var price= $('.spxqSelectDiv .smallw1 label').eq(ind).data("value");
					$('.spxqRtPrice').html('<span>'+price+'</span>');
					
				}
			}
			
		}else{
			$('.spxqRtPrice').html('<span>¥ <b >59.</b>90 ~ <b >2352.</b>00</span>')
		}
	})
	
	$('.spxqSelectDiv .smallw1 label').click(function(){
		var price= $(this).data("value");
		if($(this).hasClass("label_new")){
			$('.spxqSelectDiv .smallw1 label').removeClass("label_new");	
			$('.spxqRtPrice').html('<span>¥ <b >59.</b>90 ~ <b >2352.</b>00</span>')
		}else{
			$('.spxqSelectDiv .smallw1 label').removeClass("label_new");
			$(this).addClass("label_new");
			if($('.spxqSelectDiv .smallw0 label').hasClass("label_new")){
				$('.spxqRtPrice').html('<span>'+price+'</span>')
			}	
		}
	})
	
	
	
	$('.common .number .plus img').click(function(){
		var num = parseInt($('.common .number input').val())+1;
		$('.common .number input').val(num);
		$('.common .number .reduce img').attr('src','../images/reduce.png')
	})
	$('.common .number .reduce img').click(function(){
		var num = parseInt($('.common .number input').val())-1;
		$('.common .number input').val(num);
		
		if(parseInt($('.common .number input').val())<2){
			$('.common .number input').val(1);
			$(this).attr('src','../images/reduce_inactive.png')
		}else{
			$(this).attr('src','../images/reduce.png')
		}
		
	})
})