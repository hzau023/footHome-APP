$(function(){
//	console.log(window.location.pathname)
	$(".index").on("click",function(){
		location="../index.html"
	})
	$(".search").on("click",function(){
		location="search.html"
	})
	$(".me").on("click",function(){
		location="me.html"
	})
	
	$("#btn").on("click",function(){
		var nick= $("#con").val();
		var prop={
			name:nick
		}
		$.post("/search",prop,function(data){
			console.log(data)
		})
	})
	var myScroll = new IScroll('#wrapper',{
		probeType: 2
	});
	
	
})
