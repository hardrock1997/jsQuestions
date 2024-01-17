const input=[1,[2,3],[4,[5,6,7]],[8,[9,10,[11,12]]]]; // flatten the array to the deepest level
const flattenedArray=[];

function flatArray(input) {
	if(input===null || input===undefined) {
  	return input
  }
  const n=input.length;
  for(let i=0;i<n;++i) {
  	if(Array.isArray(input[i])) {
    	flatArray(input[i]);
    }
    else {
    	flattenedArray.push(input[i]);
    }
  }
}
flatArray(input);
console.log(flattenedArray);
