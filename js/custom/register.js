$(function(){
	$("#btn").on("click",function(){
		var prop={
			name:$("#name").val(),
			pwd:$("#pwd").val(),
			nickname:$("#nickname").val()
		}
		$.post("/register",prop,function(data){
			if(data.code==1){
				alert("注册失败");
			}else if(data.code==0){
				alert("注册成功");
				location="login.html"
			}else if(data.code==2){
				alert("用户名已存在");
			}
console.log(data)
		})
	})
})
