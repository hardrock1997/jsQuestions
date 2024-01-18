const p1=new Promise((res,rej)=>{

	setTimeout(()=>{
  	rej(1);
  },3000)
})
const p2=new Promise((res,rej)=>{

	setTimeout(()=>{
  	res(2);
  },2000)
})
const p3=new Promise((res,rej)=>{

	setTimeout(()=>{
  	rej(3);
  },1000)
})

const arr=[p1,p2,p3];



Promise.myRace=function(arr) {
	return new Promise((res,rej)=>{
  	for(p of arr) {
    	p.then((response)=>{
      	res(response);
      }).catch((err)=>{
      	rej(err)
      })
    }
  })
}

Promise.myRace(arr).then(res=>console.log(res)).catch(err=>console.log(err))


