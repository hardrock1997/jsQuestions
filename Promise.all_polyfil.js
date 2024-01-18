const p1=new Promise((res)=>{

	setTimeout(()=>{
  	res(1);
  },1000)
})
const p2=new Promise((res)=>{

	setTimeout(()=>{
  	res(2);
  },2000)
})
const p3=new Promise((res,rej)=>{

	setTimeout(()=>{
  	res(3);
  },3000)
})

const arr=[p1,p2,p3];

Promise.myAll=function(arr) {
	const result=[];
  let counter=0;
  return new Promise((res,rej)=>{
  		for(p of arr) {
      	p.then((response)=>{
        	result.push(response);
           counter++;
          if(counter===arr.length) {
          	res(result);
          }
         
        }).catch((err)=>{
        	rej("rejected due to "+err);
        })
      }
  })
}

Promise.myAll(arr).then(res=>console.log(res)).catch(err=>console.log(err))
