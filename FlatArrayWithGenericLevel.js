const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10] ] ] ] ];

function flat(arr,level=1) {
  const ans=[];
    let co=0;
    for(let i=0;i<arr.length;++i) {
      if(Array.isArray(arr[i])) {
        co++;
        if(co===level) {
          ans.push(arr[i]);
        }
        else {
          const temp=flat(arr[i],level);
          for(let i=0;i<temp.length;++i) {
            ans.push(temp[i]);
          }
        }
      }
      else {
        ans.push(arr[i]);
      }
    }
    return ans;
}

const ans=flat(arr,Infinity);
console.log(ans);
