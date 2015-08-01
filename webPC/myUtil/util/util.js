define(function(require, exports, module) {
	//var $ = require('lib/jquery/1.10.1/jquery');

	exports.chineseWord = "\u4e00-\u9fa5"; //正则中文字符

	//跨浏览器事件处理
	exports.addHandler = function(elem, type, handle) //添加事件处理程序
		{
			if (elem.addEventListener) {
				elem.addEventListener(type, handle, false);
			} else if (elem.attachEvent) {
				elem.attachEvent("on" + type, handle);
			} else {
				elem["on" + type] = handle;
			}
		}

	exports.removeHandler = function(elem, type, handle) //移除事件处理程序
		{
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			} else if (elem.detachEvent) {
				elem.detachEvent("on" + type, handle);
			} else {
				elem["on" + type] = null;
			}
		}

	exports.getEvent = function(event) { //获取事件对象
		return event ? event : window.event;
	}

	exports.getTarget = function(event) { //获取事件目标
		return event.target || event.srcElement;
	}

	exports.preventDefault = function(event) {　　　 //阻止事件默认行为
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

	exports.stopPropagation = function(event) { //停止事件捕获/冒泡
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancleBubble = true;
		}
	}

	function isType(type) { //生成判断类型函数
		return function(obj) {
			return ({}).toString.call(obj) == "[object " + type + "]"
		}
	}

	exports.isObject = isType("Object");

	exports.isString = isType("String");

	exports.isArray = Array.isArray || isType("Array");

	exports.isFunction = isType("Function");

	//exports.isNumber = isType("Number");

	exports.isNumber = function(num) {
		return (num instanceof Number || typeof num === "number") && !isNaN(num);
	}

	exports.protoExtend = function(original) { //简单原型继承
		var F = function() {};
		F.prototype = original;
		return new F();
	}

	exports.addComputedProp = function() { //添加computed properties功能
		Function.prototype.computed = function() {
			return {
				computed: true,
				func: this
			};
		}

		Object.prototype.computize = function() {
			for (var prop in this) {
				if (typeof this[prop] === 'object' && this[prop].computed === true) {
					var func = this[prop].func;
					delete this[prop];
					Object.defineProperty(this, prop, {
						set: func,
						get: func
					});
				}
			}
			return this;
		}
	}

	exports.removeComputedProp = function() { //移除computed properties功能
		delete Function.prototype.computed;
		delete Object.prototype.computize;
	}



});