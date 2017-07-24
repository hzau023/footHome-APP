
var express=require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var session=require("express-session");

var app=express();

var Load=require("./assets/js/custom/loadModel.js");
var User=require("./assets/js/custom/userModel.js");


mongoose.connect('mongodb://127.0.0.1/football');

var db=mongoose.connection;

db.on("open",function(){
	console.log("数据连接成功")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}))


app.use(session({
	secret:"1702demo",
	maxAge:60000
}))


app.use(express.static("./assets/html"))
app.use(express.static('./assets/css'));
app.use(express.static('./assets/js'));
app.use(express.static('./assets/font'));
app.use(express.static('./assets/imgs'));
app.use(express.static('./'));

//app.set("views","./html")
//app.engine(".html",ejs.__express)
//app.set("view engine","html")

app.get("/",function(req,res){
	res.send("get请求")
})


app.post("/register",function(req,res){
	User.find({"name":req.body.username},function(err,doc){
		if(err){
			res.json({code:1,msg:"注册失败！"})
			return
		}
		if(doc.length==1){
			res.json({code:2,msg:"用户名已存在！"})
		}else{
			var u=new User({
				name:req.body.name,
				pwd:req.body.pwd,
				nickname:req.body.nickname
			})
			u.save(function(err,doc){
				if(err){
					res.json({code:1,msg:"保存失败！"})
					return 
				}else{
					res.json({code:0,msg:"保存成功！"})
				}
			})
		}
	})
})

app.post("/login",function(req,res){
	User.find({"name":req.body.name},function(err,doc){
		if(err){
			res.json({code:3,msg:"登录失败！"})
			return
		}
		if(doc.length==1){
			if(doc[0].pwd==req.body.pwd){
				req.session.username=doc[0].name
				res.json({code:0,msg:"登录成功！"})
			}else{
				res.json({code:2,msg:"密码错误！"})
			}
		}else{
			res.json({code:1,msg:"用户名不存在！"})
		}
	})
})
//app.post("/img/save",function(req,res){
//	User.find({"name":req.body.name},function(err,doc){
//		if(err){
//			res.json({code:3,msg:"登录失败！"})
//			return
//		}
//		if(doc.length==1){
//			if(doc[0].pwd==req.body.pwd){
//				req.session.username=doc[0].name
//				res.json({code:0,msg:"登录成功！"})
//			}else{
//				res.json({code:2,msg:"密码错误！"})
//			}
//		}else{
//			res.json({code:1,msg:"用户名不存在！"})
//		}
//	})
//})





app.post("/index/swiper",function(req,res){
	Load.find({"index":req.body.index},function(err,doc){
		console.log(doc)
		if(err){
			res.json({code:3,msg:"刷新失败！"})
			return
		}
		if(doc.length!==0){
			res.json({doc:doc})
		}
	})
})

app.post("/search",function(req,res){
	var str=req.body.name
	User.find({"name":str},function(err,doc){
		if(err){
			res.json({code:3,msg:"刷新失败！"})
			return
		}
		if(doc.length!=0){
			res.json({doc:doc})
		}
		
		
//		$(doc).each(function(index,element){
//			if(element.indexOf(str)!=-1){
//				res.json({doc:element})
//			}else{
//				res.json({code:1,msg:"不存在此用户名相关！"})
//			}
//		})
	})
})



app.listen(,function(){
	console.log("连接成功")
})




