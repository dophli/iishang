/********************************************新style.js**************************************************/
$(function(){
	
	//商品列表信息显示
	$(".list_goods > ul ").on("mouseover mouseout","li",function(event){
		if(event.type == "mouseover"){
			$(this).find(".pic_info").css("display","block");
		}else if(event.type == "mouseout"){
			$(this).find(".pic_info").css("display","none");
		}
	});	
	
	//登录注册
	
	//登录注册方式
	//密码登录
	$(".change_pwdlogin").click(function(){
		$(".yzmlogin_div,.zhuce_div").hide();
		$(".pwdlogin_div").show();	
	});
	//注册
	$(".change_zhuce").click(function(){
		$(".yzmlogin_div,.pwdlogin_div").hide();
		$(".zhuce_div").show();	
	});
	//验证码登录
	$(".change_yzmlogin").click(function(){
		$(".pwdlogin_div,.zhuce_div").hide();
		$(".yzmlogin_div").show();	
	});
	//注册页转到密码登录
	$(".change_topwdlogin").click(function(){
		$(".yzmlogin_div,.zhuce_div").hide();
		$(".pwdlogin_div").show();	
	});
	//三次手机密码错误后出现静态验证码
	$(".three_times_error").click(function(){
		$(".mm_form input").addClass("errorinput_border");
		//$(".mm_form .state_yzmshow").show();	
		$(".mm_form .error_tip,.mm_form .errorcha").show();	
	});
	//input获得焦点后错误提示消失
	$("input").focus(function ()//得到教室时触发的时间
	{
		$(".error_tip,.yzmerror_tip").hide();
		$(this).removeClass("errorinput_border");
		$(this).next(".errorcha").hide();
	});
	//验证码错误提示
	$(".yzmerror_show").click(function(){
		$('.yzm_form .yzmerror_tip').show();
		$(".yzm_form .regist_yzminput").addClass("errorinput_border");
		$(".yzm_form .regist_yzminput").next(".errorcha").show();		
	});
	//
});
