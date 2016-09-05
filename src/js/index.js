define(['jquery','swiper','city'],function($,swiper,city){
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	 var index=$('#index');
	 $('.footer>nav').on('click','a',function(){
	 	var ind=$(this).index();
	 	$(this).addClass('bg').siblings().removeClass('bg');
	 })
	 $('.phone',index).on('click',function(){
	 	$('.mark').show();
	 	$('.tel').show();
	 })
	 $('.close',index).on('click',function(){
	 	$('.mark').hide();
	 	$('.tel').hide();
	 });
	 //搜索页
	 var serch=$('#serch');
	 $('#txt').on('focus',function(){
	 	serch.show();
	 })
	 
	 $('.back',serch).on('click',function(){
	 	serch.hide();
	 })
	 //城市渲染
	 /* var city=$('#city');
	 $('.name').on('click',function(){
	 	$('.plugin').removeClass('none');
	 })
	 $('.go',city).on('click',function(){
	 	$('.plugin').addClass('none');
	 })*/

	 var page=$('#index');
	$('.name',page).on('click',function(){
		city.show($(this));		
	})

	 
})