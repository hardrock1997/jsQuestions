function add(a) {
	return function(b) {
  	if(b) {
    	return add(a+b);
    }
    else {
    	return a;
    }
  }
}
const res=add(1)(2)(3)(4)();
console.log(res)
