/*let fullName = prompt("Enter Your Name");

let userName = "@" + fullName;

console.log(userName + (fullName.length));*/

//Array

/*let marks = [85,97,44,37,76,60];

let sum = 0;

for(let i = 0;i < marks.length;i++)
{
    sum += marks[i];
}
let avg = sum/marks.length;

console.log("Average of Marks is =",avg);*/

let price = [250,645,300,900,50];

for(let i = 0;i < price.length;i++)
{
    price[i] = price[i] - price[i]/100 * 10;

    console.log(price[i]);
}