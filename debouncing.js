const button=document.getElementById('btn');
let clickedTimes=0;
const str='btn clicked';

/*have to debounce the handleClick function, so instead of handleClick,debouncedHandleClick will be used */
function handleClick(str) {
  console.log(str,clickedTimes++);
} 
/*debouncedHandleClick is debounced*/
const debouncedHandleClick=myDebounce(handleClick,1000);
function execute() {
	debouncedHandleClick(str);
}
button.addEventListener('click',execute);

function myDebounce(cb,delay=800) {
	let timer;
  return function(...args) {
      if(timer) {
        clearTimeout(timer);
      }
			timer=setTimeout(()=>{
      	cb(...args)
      },delay)
  }
}
