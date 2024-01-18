const p1=new Promise((res,rej)=>{

	setTimeout(()=>{
  	rej(1);
  },1000)
})
const p2=new Promise((res,rej)=>{

	setTimeout(()=>{
  	rej(2);
  },2000)
})
const p3=new Promise((res,rej)=>{

	setTimeout(()=>{
  	rej(3);
  },3000)
})

const arr=[p1,p2,p3];

Promise.allSettled(arr).then(res=>console.log(res))


Promise.myAllSettled=function(arr) {
	const result=[];
  let count=0;
  return new Promise((res)=>{
  	for(p of arr) {
    	p.then((response)=>{
      	result.push({status:"fullfilled",value:response});
        count++;
        if(count===arr.length) {
        	res(result);
        }
      }).catch((err)=>{
      		result.push({reason:err,status:"rejected"});
          count++;
          if(count===arr.length) {
          	res(result);
          }
      })
    }
  })
}

Promise.myAllSettled(arr).then(res=>console.log(res));
