require.config({
	paths:{
		'jquery':'../lib/jquery',
		'swiper':'../lib/swiper',
		'citydata':'../data/citydata'
	}
})
require(['index','place','my','login','travel'],function(){

})