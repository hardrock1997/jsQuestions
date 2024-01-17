function f(...args) {
	console.log(this.x,...args);
}

const obj={
	x:10
}

f.call(obj,1,2)
f.apply(obj,[1,2]) 

Function.prototype.myCall=function(context,...args) {
  if(typeof this!=="function") {
     throw new Error("Not callable!!!")
  }
  const key='fn';
  context[key]=this;
  context.fn(...args);
}

 f.myCall(obj,1,2); 

Function.prototype.myApply=function(context,args) {
 if(typeof this!=="function") {
     throw new Error("Not callable!!!")
  }
  const key='fn';
  context[key]=this;
  context.fn(...args);
}

f.myApply(obj,[1,2]);
