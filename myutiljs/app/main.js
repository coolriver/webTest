define(function(require, exports, module) {
	var util = require('util/util');
/*	util.jj()(document).ready(function(){
		alert();
	});
	console.log(util.abc());*/


/*	function say (argument) {
		// body...
		alert();
	}
	util.addHandler(document,"click",say);
	util.removeHandler(document,"click",say);
	util.addHandler(document,"click",function(event){
		var event = util.getEvent();
		console.log(event);
	})
	var a=new Number("abc")
	console.log(util.isNumber(a));

	util.addComputedProp();*/
	var ball1 = document.getElementById("ball1");
	var ball2 = document.getElementById("ball2");
	var ball3 = document.getElementById("ball3");
	var ball4 = document.getElementById("ball4");

	function moveElem(elem,time,x,y){
		setTimeout(function() {
			elem.style.left = x - 5 + "px";
			elem.style.top = y - 5 + "px";
		}, time);
	}

	util.addHandler(document,"mousemove",function(event){
		var e = util.getEvent(event);
		moveElem(ball1,0,e.clientX,e.clientY);
		moveElem(ball2,50,e.clientX,e.clientY);
		moveElem(ball3,100,e.clientX,e.clientY);
		moveElem(ball4,150,e.clientX,e.clientY);
	})
});