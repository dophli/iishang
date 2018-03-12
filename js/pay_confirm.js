$(function(){
	$('.showDistrictSelect').click(function(){
		$('.foamZcc,.form-inline').show();
	})
	$('.form-inline .btn_city2').click(function(){
		$('.foamZcc,.form-inline').hide();
	})
	$('.form-inline .btn_city1').click(function(e){
		e.preventDefault();//阻止默认行为
		$('.foamZcc,.form-inline').hide();
		var h ="";
		h+=$("#province1").val()+',';
		h+=$("#city1").val()+',';
		h+=$("#district1").val();
		$('.showDistrictSelect div span').html(h);
	})
	
	
	$('#samephone').click(function(){
		var item = $("#samephone:checked"); 
		var len= item.length;
		if(len>0){ 
			$('#orderPhone').val($('#shouhuorenPhone').val()) ;
		}else{
			$('#orderPhone').val('') ;
		}
	})
	
	
	$('#lycheckbox').next('label').click(function(){
		var item = $("#lycheckbox:checked"); 
		var len= item.length;
		if(len>0){ 
			$('#userNotes').hide()
		}else{
			$('#userNotes').show()
		}
	})
	
	
	// 去支付
	$('#pay_btn_id').bind('click',function(){
		if($('#shouhuorenName').val()==''){
			$('.foamZcc,.foamModal').show();
		}else{
			var reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
			var uu = $("#shouhuorenPhone").val();
			if(!reg.test(uu)){
				if(uu==''){
					$('.foamZcc,.foamModal').show();
					$('#tip_info').html('请填写手机号码');
				}
				else{
					$('.foamZcc,.foamModal').show();
					$('#tip_info').html('对不起，您输入的手机号格式不正确!');
				}
			}
		}
	})
	
	$('.foamModalBtn').click(function(){
		$('.foamZcc,.foamModal').hide();
	})
})