var dialog;
window.onload = function(){
	document.getElementById("start").onclick = function(){
		dialog = myDialog({
							width:400,
							height:200,
							drag:true,
							title:"请注意",
							content:"这是个可以拖拽移动的弹出窗"
							});
		dialog.showDialog();
	}

}

function myDialog(option)
{
	var _default = {
		title : "提示",
		id:"dlg",
		content : "这是个弹出窗口！",
		width : 400,
		height : 250,
		drag : false
	},
	key,
	div_box;
	if (option != null){
		for (key in _default){
			if (option[key] != undefined){
				_default[key] = option[key];
			}
		}
	}

	div_box = document.createElement("div");
	if (!_default.drag){
		div_box.className = "box";
	}
	else{
		div_box.className = "box drg";
	}
	div_box.id=_default.id;
	div_box.style.width=_default.width+"px";
	div_box.style.height=_default.height+"px";
	div_box.style.marginLeft="-"+_default.width/2+"px";
	div_box.style.marginTop="-"+_default.height/2+"px";

	var htmlStr = "<div class='box-hd'>\
					<span class='title'>"+_default.title+"</span><a href='javascript:document.getElementById(\""+_default.id+"\").remove();'></a>\
				   </div>\
				   <div class='box-bd'>\
				   	<p>"+_default.content+"</p>\
				   </div>\
				   <div class='box-ft'>\
				   <button onclick='document.getElementById(\""+_default.id+"\").remove();'>取消</button> \
				   <button onclick='document.getElementById(\""+_default.id+"\").remove();'>确定</button>\
				   </div>\
				   ";

	div_box.innerHTML=htmlStr;
	document.body.appendChild(div_box);
	(function(){
		var _param = {
			isDrag:false,
			cX:0,
			cY:0,
			mgL:0,
			mgR:0
		};
		if (_default.drag){
			var boxBd = document.getElementById(_default.id)
			var boxHd = boxBd.getElementsByClassName("box-hd")[0];
			boxHd.onmousedown = function(e){
				_param.drag = true;
				_param.cX = e.clientX;
				_param.cY = e.clientY;
				_param.mgL = parseInt(div_box.style.marginLeft);
				_param.mgT = parseInt(div_box.style.marginTop);
				console.log(_param.cX+" "+_param.cY);
				//alert(_param.drag);
			}
			boxHd.onmouseup = function(e){
				_param.drag = false;
				//alert(_param.drag);
			}
			document.onmousemove = function(e){
				if (_param.drag){
					div_box.style.marginLeft = _param.mgL + (e.clientX - _param.cX) + "px";
					div_box.style.marginTop = _param.mgT + (e.clientY - _param.cY) + "px";
				}
			}
		}
	}
	)();

	return {
		showDialog : function(){
			div_box.style.display = "block";
		},
		hideDialog : function(){
			div_box.style.display = "none";
		},
		delDialog : function(){
			div_box.remove();
		}
	};
}