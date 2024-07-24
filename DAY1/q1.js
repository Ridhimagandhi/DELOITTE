// var arr=[10,20,30,40];
// // for(i=arr.length;i>=0;i--){
// //     console.log(arr[i]);
// // }
let arr = [1, 2, 3, 4, 5];
let s = 0;
let e = arr.length - 1;
console.log(e);
while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
}
console.log(arr)