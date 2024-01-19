// <body>
//    <button id='btn'>
//      click me
//    </button>
// </body>


const button=document.getElementById('btn');
let clickedTimes=0;
const str='btn clicked';

/*have to throttle the handleClick function, so instead of handleClick,throttledHandleClick will be used */
function handleClick(str) {
  console.log(str,clickedTimes++);
} 
/*debouncedHandleClick is debounced*/
const throttledHandleClick=myThrottle(handleClick,1000);
function execute() {
	throttledHandleClick(str);
}
button.addEventListener('click',execute);

function myThrottle(cb,delay=800) {
	let last=0;
  return function(...args) {
  	let now=new Date().getTime();
  	if(now-last<delay) {
    	return;
    }
    last=now;
    return cb(...args)
  }
}
