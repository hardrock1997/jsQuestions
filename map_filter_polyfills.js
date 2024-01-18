
function logic(ele) {
	return ele+2;
}
function logic2(ele) {
	if(ele%2==0) {
  	return ele
  }
}

Array.prototype.myMap=function(logic) {
  const resultArray=[];
  for(let i=0;i<this.length;++i) {
    resultArray.push(logic(this[i]));
  }
  return resultArray;
  
}
const res1=[1,2,3].myMap(logic);
console.log(res3) 

Array.prototype.myFilter=function(logic2) {
  const resultArray=[];
   for(let i=0;i<this.length;++i) {
     const result=logic2(this[i]);
     if(result!=undefined) {
      resultArray.push(result);
    }
  }
  return resultArray;
  
}
const res2=[1,2,3].myFilter(logic2);
console.log(res2) 



