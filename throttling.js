const button = document.getElementsByClassName('btn')[0];
function expensiveFn() {
  console.log('clicked');
}
var betterFn=throttle(expensiveFn,500);
button.addEventListener('click',betterFn);

function throttle(func,limit=200) {
  let flag=true;
  return function() {
    if(flag) {
      const args=arguments;
      func.apply(this,args)
      flag=false;
      setTimeout(()=>{
        flag=true;
      },limit)
    }
  }
}  
