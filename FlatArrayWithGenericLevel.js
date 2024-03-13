const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10] ] ] ] ] ];

var flat = function (arr, n, res=[],curr=0) {
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])&&curr<n){
            flat(arr[i],n,res,curr+1)
        }
        else{
            res.push(arr[i])
        }
    }
    return res
};


https://leetcode.com/problems/flatten-deeply-nested-array/
