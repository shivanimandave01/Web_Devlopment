// let cnt;
// function countvowels(str){
//     for(const i of str){
//         if(i == "a"||i == "e" ||i == "i" || i == "o" || i == "u")
//         {
//             cnt++;
//         }
//     }
//      console.log(cnt);
// }
// countvowels("Shivani");

//forEach loop

// let arr = ["Pune","Satara","Mumbai","Karad"];

// arr.forEach((val)=>
// {
//     console.log(val);
// })

//practice

// let arr =[1,2,3,4,5,6,7,8,9];

// arr.forEach((val)=>{
//     console.log(val*val);
// })

// let arr=[1,4,5,6,8];

// let newArr = arr.map((num)=>
// {
//     return num*2;
// })

// let arr=[2,5,6,7,9,13,16];

// let newArr = arr.filter((val){
//     return val % 2 === 0;
// })

// console.log(newArr);

// let marks=[89,93,64,82,98,65,76];

// let newMarks = marks.filter((val)=>{
//     return val > 90;
// })

// console.log(newMarks);


let n = prompt("Enter How many Numbers Will be add");

let arr= [];

for(let num = 1;num <= n;num++){
    arr[num-1] = num;
}

let sum = arr.reduce((res,current)=>{
    return res + current;
})

console.log(sum);