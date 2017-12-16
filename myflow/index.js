$(function() {
	var flowdata=window.localStorage.getItem("data");
	$('#myflow').myflow(
		{
			basePath : "",
			allowStateMutiLine:true,
			restore : eval("(" + flowdata + ")"),
			tools : {
				save : function(data) {
					console.log("保存",eval("("+data+")"));
					//console.log(data);
					window.localStorage.setItem("data",data)
				},
				publish:function(data){
					// console.log("发布",eval("("+data+")"));
				},
				addPath:function(id,data){
					// console.log("添加路径",id,eval("("+data+")"));
				},
				addRect:function(id,data,allData){
					// console.log(data);
					console.log("添加状态",allData);

				},
				clickPath:function(id){
					//console.log("点击线",id)
					console.log(id)
				},
				clickRect:function(id,data){
					console.log(typeof flowdata);
				},
				deletePath:function(id){
					//console.log("删除线",id);
				},
				deleteRect:function(id,data){
					//console.log("删除状态",id,eval("("+data+")"));
				},
				revoke:function(id){

				}
			}
		});

	});