define(['jquery'],function($){
	var login=$('#login');
	$('.btn').on('click','p',function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.con>div').eq(index).show().siblings().hide();
	})
	$('header').on('click','span',function(){
		window.history.back();
	})

	//获取短信验证码
	var code=$('.code');
	var time=30,
		timer=null;
		code.disabled=false;
	code.on('click',function(){
		function date(){
			time--;
			code.html(time+'秒');
			code.attr('disabled','true');
			if(time<0){
				clearInterval(timer);
				code.html('重新获取验证码');
				time=30;
				code.removeAttr('disabled');
			}
		}
		timer=setInterval(date,1000)
	})
	//点击登录
	$('.deng').on('click',function(){
		var phone=$('.phone').val(),
			psw=$('.psd').val(),
			ma=$('.ma').val();
		var reg=/^1[3,5,7,8]\d{9}$/;

		if(!reg.test(phone)){
			alert('请输入正确格式');
			return false;
		};
		if(psw==""){
			alert('密码不能为空')
		}
		if(phone&&psw&&ma){
			alert('登录成功')
		}else{
			alert('请完善信息')
		}
	})
	
})