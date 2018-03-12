$(function(){
	$("#btn_pwd_login").click(function(){
		var reg = /^0?(13|14|15|17|18|19)[0-9]{9}$/;
		var uu = $("#phone").val();
		if(reg.test(uu)){
			
		}else{
			if(uu==''){
				$('.foamZcc').css('display','block');
				$('#dlg_tip_info').css('display','block');
				$('#tip_info').html('手机号码不能为空！');
				$('.hiddenTipInfo').bind('click',function(){
					$('.foamZcc').css('display','none');
					$('#dlg_tip_info').css('display','none');
				})
			}
			else{
				$('.foamZcc').css('display','block');
				$('#dlg_tip_info').css('display','block');
				$('#tip_info').html('对不起，您输入的手机号格式不正确!');
				$('.hiddenTipInfo').bind('click',function(){
					$('.foamZcc').css('display','none');
					$('#dlg_tip_info').css('display','none');
				})
			}
		}
	})
})
 