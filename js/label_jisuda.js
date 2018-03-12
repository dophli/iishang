$(function(){
	$('.spxqSelectDiv label').addClass("label_old");
	
// 对应显示不同的价格

	//实现单个类的切换
	$('.spxqSelectDiv .smallw0 label').click(function(){
		if($(this).hasClass("label_new")){
			$('.spxqSelectDiv .smallw0 label').removeClass("label_new");	
		}else{
			$('.spxqSelectDiv .smallw0 label').removeClass("label_new");
			$(this).addClass("label_new");
		}
	})
	
	$('.spxqSelectDiv .smallw1 label').click(function(){
		if($(this).hasClass("label_new")){
			$('.spxqSelectDiv .smallw1 label').removeClass("label_new");	
		}else{
			$('.spxqSelectDiv .smallw1 label').removeClass("label_new");
			$(this).addClass("label_new");
			
		}
	})
	//价格切换
	$('.spxqSelectDiv .smallw0 label').eq(0).click(function(){
		if($(this).hasClass("label_new")){
			if($('.spxqSelectDiv .smallw1 label').eq(0).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥358.00</span>')
			}
			if($('.spxqSelectDiv .smallw1 label').eq(1).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥219.00</span>')
			}
		}else{
			$('.spxqRtPrice').html('<span>¥ <b >169.</b>00 ~ <b >358.</b>00</span>')
		}
	})
	$('.spxqSelectDiv .smallw0 label').eq(1).click(function(){
		if($(this).hasClass("label_new")){
			if($('.spxqSelectDiv .smallw1 label').eq(0).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥269.00</span>')
			}
			if($('.spxqSelectDiv .smallw1 label').eq(1).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥169.00</span>')
			}
		}else{
			$('.spxqRtPrice').html('<span>¥ <b >169.</b>00 ~ <b >358.</b>00</span>')
		}
	})
	$('.spxqSelectDiv .smallw1 label').eq(0).click(function(){
		if($(this).hasClass("label_new")){
			if($('.spxqSelectDiv .smallw0 label').eq(0).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥358.00</span>')
			}
			if($('.spxqSelectDiv .smallw0 label').eq(1).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥219.00</span>')
			}
		}else{
			$('.spxqRtPrice').html('<span>¥ <b >169.</b>00 ~ <b >358.</b>00</span>')
		}
	})
	$('.spxqSelectDiv .smallw1 label').eq(1).click(function(){
		if($(this).hasClass("label_new")){
			if($('.spxqSelectDiv .smallw0 label').eq(0).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥269.00</span>')
			}
			if($('.spxqSelectDiv .smallw0 label').eq(1).hasClass("label_new")){
				$('.spxqRtPrice').html('<span>¥169.00</span>')
			}
		}else{
			$('.spxqRtPrice').html('<span>¥ <b >169.</b>00 ~ <b >358.</b>00</span>')
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