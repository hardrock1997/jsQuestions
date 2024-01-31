const s="yash mundra yayy";

function f(string,del) {
	
  if(del==='') return Array.from(string);
  let result=[];
  function helper(i,str) {
    if(i>=string.length)return;
    const index=str.indexOf(del);
    if(index>=0) {
      result.push(str.substring(0,index));
      helper(index+del.length,str.substring(index+del.length));
    }
		else result.push(str);

  }
  
  helper(0,string);
	return result;
}

const res=f(s," ");
console.log(res);
