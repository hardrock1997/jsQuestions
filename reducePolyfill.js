Array.prototype.myReduce=function(cb,initialVal) {
  if(!Array.isArray(this)) {
    throw new Error('not callable!!!')
  }
	let acc,cv,index;
		if(initialVal) {
	  	acc=initialVal;
	    index=0;
	  }
	  else {
	  	acc=this[0];
	    index=1;
	  }
	  
	 for(;index<this.length;++index) {
	    cv=this[index];
	    acc=cb(acc,cv);
	  } 
	  return acc;
}

const res=[1,2,3,4].myReduce(cb,0);
console.log(res);

function cb(acc,cv) {
	return acc+cv;
}
