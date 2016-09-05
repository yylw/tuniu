define(['jquery','plugin','citydata'],function($,plugin,cities){
	var City=function(){
		plugin.apply(this,[{showClass:null}]);
		this.tpl='<div id="city">\
			<div class="header">\
				<span class="go">X</span><h2>选择城市</h2>\
			</div>\
			<section>\
				<div class="cp">\
					<span></span><input type="text" class="search-msg" placeholder="南京/nanjing/nj">\
				</div>\
				<div class="con">\
					<h3>根据您的定位推荐</h3>\
					<p>北京</p>\
				</div class="con">\
				<div class="con">\
					<h3>历史记录</h3>\
					<p>北京</p>\
				</div class="con">\
				<div class="con hot-city"\
					<h3 class="cont-title">热门</h3>\
					<div></div>\
				</div class="con">\
				<div class="alphabet">\
					<ol class="clear"></ol>\
				</div>\
				<div class="city-detail clear"></div>\
				<div class="search-result"></div>\
			</section>\
		</div>';
		var allcity=this.allcity=cities.cityList;
		var obj={};
		var alphabet=[];
		var tmp =null;

		allcity.forEach(function(v,i){
			tmp = v[1].charAt(0).toUpperCase();
			if(!obj[tmp]){
				obj[tmp] = [];
				alphabet.push(tmp);
			}
			obj[tmp].push(v);
			
		});
		this.obj=obj;
		this.alphabet =alphabet.sort();

	};
	City.prototype=new plugin();
	City.prototype.init=function(){

		this.pluginDom.innerHTML = this.tpl;
		this.render();
		this.bindEvt();
		//默认展示A开头的城市
		$(".alphabet").find('li[data=A]').click();
	}	
	City.prototype.render=function(){
		var str="";
		this.alphabet.forEach(function(v,i){
			str+='<li data="'+v+'">'+v+'</li>';
		})
		$(".alphabet").find('ol').html(str);
		//热门
		str='';
		cities.hotList.forEach(function(v,i){
			str+='<p>'+v[0]+'</p>';
		})
		$('.hot-city div').html(str);
	};
	City.prototype.bindEvt=function(){
		var that=this;
		 	this.warpper=$('#city');
		$('.alphabet').on('click','li',function(){
			var tag=$(this).attr('data');
			console.log(that.obj[tag]);
			var str='<h2 class="cont-title">'+tag+'</h2>';
			that.obj[tag].forEach(function(v,i){
				str+='<p>'+v[0]+'</p>';
			})
			$('.city-detail').html(str);
		})

		$(this.pluginDom).on('click','p',function(){
			var name = $(this).text();
			console.log(name)
			that.targetEle.text(name);
			that.targetEle.text(name);

			console.log(that.targetEle.text(name));
			that.hide();
		});

		this.warpper.find('.search-msg').on('input propertychange',function(){
			that.match($(this).val());
		})

	};
	City.prototype.match=function(_key){
		var len=_key.length;
		var domWrap = $(this.pluginDom);
        if(len>0){
            domWrap.find('.search-result').show();
        }else{
            domWrap.find('.search-result').hide();
        }
		var arr=[];
		this.allcity.forEach(function(v,i){
			if(v[0].substr(0,len) == _key || v[1].substr(0,len) == _key ||v[2].substr(0,len) == _key){
                arr.push(v);
            }
		});
		var str="";
		arr.forEach(function(v,i){
			str+='<p>'+v[0]+'</p>';
		})
		$('.search-result').html(str);

	};
	City.prototype.show = function(targetEle){
        this.init();
        this._show_();

        this.targetEle = targetEle;
    };
    City.prototype.hide = function(){
        this._hide_();
    };
    City.prototype.afterShow = function(){
        this.warpper.scrollTop(0);
    };
    City.prototype.afterHide = function(){
        $(this.pluginDom).find('.search-result').hide();
        $(this.pluginDom).find('.search-msg').val('');
    };
	return new City();
})