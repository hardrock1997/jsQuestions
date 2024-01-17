function f(...args) {
	console.log(this.x,...args);
}

const obj={
	x:10
}

const binded=f.bind(obj,3,4);
binded(1,2); 


Function.prototype.myBind=function(context,...args1) {
	const key='fn';
  context[key]=this;
  return function(...args2) {
  	context.fn(...args1,...args2);
  }
}

const bindedFromMyBind=f.myBind(obj,3,4);
bindedFromMyBind(1,2);
