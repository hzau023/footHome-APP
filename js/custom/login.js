$(function(){
	var username = $("#username") , pwd = $("#pwd");
	
   $("#btn").on('click',function(event) {
   	   event.preventDefault();
        var prop = { //es6对象属性的简写，当你的key和value是同一个变量的时候，就可以使用
			name:$("#name").val(),
			pwd:$("#pwd").val()
		};
       $.post('/login', prop, function(data) {
            if(data.code==0){
				alert("登录成功！");
				location="context-hot.html"
			}else if(data.code==1){
				alert("用户名不存在！");
				location="login.html"
			}else if(data.code==2){
				alert("密码错误！");
			}else if(data.code==3){
				alert("登录失败！！");
			}
      });
   });
   var win=window;
   document.addEventListener('plusready', function(){
   		$(".qq").on("click",function(){
   			plus.oauth.getServices( function(services){
   				services.forEach(function(element,index){
   					if(element.id=="qq"){
   						element.login(function(event ){
   							var msg=JSON.stringify(event.target)
   							var obj=JSON.parse(msg)
   							alert("欢迎你!!"+obj.userInfo.nickname)
 							location="/storage/emulated/0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/www/index.html"
   						})
   					}
   				})
   			});
   		})
   		$(".sina").on("click",function(){
   			plus.oauth.getServices( function(services){
   				services.forEach(function(element,index){
   					if(element.id=="sinaweibo"){
   						element.login(function(event ){
   							var msg=JSON.stringify(event.target)
   							var obj=JSON.parse(msg)
   							alert("欢迎你!!"+obj.userInfo.nickname)
 							location="/storage/emulated/0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/www/index.html"
   						})
   					}
   				})
   			});
   		})
   		
   })
})
