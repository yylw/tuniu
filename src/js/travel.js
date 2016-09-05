define(['jquery','city'],function($,city){
	var text=$('.text');
	$('.minus').on('click',function(){
		text.val(parseInt(text.val())-1)
		if(parseInt(text.val())<1){
			text.val(1)
		}
	})
	$('.add').on('click',function(){		
		text.val(parseInt(text.val())+1)
	})
	var page1=$('#travel');
	$('.name',page1).on('click',function(){
		city.show($(this));		
	})
	$('.leave',page1).on('click',function(){
		city.show($(this));		
	})
})