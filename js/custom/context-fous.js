$(function(){
//	console.log(window.location.pathname)
	if(window.location.pathname=="/storage/emulated/0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/www/html/context-fous.html"){
		$(".fous").css({
			"background":"#64d985",
			"color":"white"
		})
		$(".hot").css({
			"background":"#3dd067",
			"color":"#a3e9b7"
		})
	}
	$(".hot").on("click", function(){
		location="../index.html"
	})
	$(".index").on("click",function(){
		location="../index.html"
	})
	$(".search").on("click",function(){
		location="search.html"
	})
	$(".me").on("click",function(){
		location="me.html"
	})
	
	
	
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		bulletClass:'bullet',
		bulletActiveClass:'active',
		paginationBulletRender: function (swiper, index, className) {
			var arr = ['足球现场','足球生活','足球美女'];
		     return '<span class="' + className + '">' + arr[index] + '</span>';
		}
	})
	var winHeight=window.innerHeight;
	var upTagHeight=$(".upTag").css("height").slice(0,2);
	var num=0;
	var myScroll = new IScroll('#wrapper',{
		probeType: 2
	});
	var maxScrollY = myScroll.maxScrollY ;
	myScroll.on("scroll",function(){
		//上拉
		if(this.y<maxScrollY-upTagHeight){
			$(".upTag").text("释放加载");
		}	
		if(this.y>maxScrollY-upTagHeight){
			$(".upTag").text("上拉加载");
		}
		num=this.y
	})
	
	myScroll.on("scrollEnd",function(){
		//上拉
		if(num<maxScrollY-upTagHeight){
			$(".upTag").text("加载中..");
			if(this.y==maxScrollY){
				var html="<li>aaaaaaaaaaaa</li>"+
						"<li>aaaaaaaaaaaa</li>"+
						"<li>aaaaaaaaaaaa</li>"+
						"<li>aaaaaaaaaaaa</li>"+
						"<li>aaaaaaaaaaaa</li>"
				$(".upTag").before(html);
				myScroll.refresh();
				maxScrollY=myScroll.maxScrollY ;
			}
		}
	})
	
})
