Array.prototype.myReduce=function(cb,initialValue,index,array=this) {
	if(!Array.isArray(array)) {
  	throw new Error('Not callable!!!');
  }
  if(!initialValue && array.length===0) {
  	throw new Error('Empty array!!!')
  }
  if(array.length===1) {
    return array[0];
  }
  
  let acc=initialValue!==undefined?initialValue:array[0];
  index=acc===initialValue?0:1;

   for(;index<array.length;++index) {
    acc=logic.call(this,acc,array[index]);   
  }
 return acc;
}

function logic(acc,cv) {
  return acc+cv;
 }

const result=[1,2,3].myReduce(logic,0);
console.log(result);
