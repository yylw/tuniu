define(['jquery'],function($){
	$('aside>ul').on('click','li',function(e){
		e.preventDefault();
		var ind=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('section>div').eq(ind).css({
			"-webkit-transform":"translateX(0)",
			"-webkit-transition":"all 1s"
		}).siblings().css({
			'-webkit-transform':'translateX(100%)'
		})
	})
})