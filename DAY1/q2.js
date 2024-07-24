let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let sumeven = 0;
let sumodd = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        sumeven = sumeven + arr[i];
    }
    else {
        sumodd = sumodd + arr[i];
    }
}
let new_arr=[];
new_arr.push(sumeven);
new_arr.push(sumodd);
console.log(new_arr);

