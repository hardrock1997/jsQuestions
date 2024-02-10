// Fisher-Yates shuffling alogrithm for array

const arr=[1,2,3,4,5];


function shuffle(arr) {
    const n=arr.length;
    for(let i=n-1;i>=0;--i) {
        const j=Math.floor(Math.random()*(i+1));
        const temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}
shuffle(arr);
