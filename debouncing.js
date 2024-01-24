

function debounce(func,delay=500) {
	let timer;
	return function() {
  	
    if(timer) {
    	clearTimeout(timer);
    }
    const args=arguments;
    timer=setTimeout(()=>{
    	func.apply(this,args)
    },delay)
  }
}


function expensiveFn(e) {
  console.log('clicked',e.target.value);
}
const button = document.getElementsByClassName('btn')[0];
const betterFnForClick=debounce(expensiveFn,500);
button.addEventListener('click',betterFnForClick);

const input=document.getElementById('input');
const betterFnForTyped=debounce(expensiveFn,500);
input.addEventListener('keyup',betterFnForTyped);





 
 
 



