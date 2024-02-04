 function efn(...args) {
      console.log('slow function',...args);
      return 'done!!!';
 } 
 
 
function memoize(cb) {
	let cache={};
  return function(...args) {
  	const key=JSON.stringify(args);
    if(key in cache) {
    	return cache[key];
    }
    else {
    	const result=cb.apply(this,args);
      cache[key]=result;
      return result;
    }
  }
}


const memoized=memoize(efn);
console.log(memoized(10,20));
console.log(memoized(30,20));
console.log(memoized(10,20));
