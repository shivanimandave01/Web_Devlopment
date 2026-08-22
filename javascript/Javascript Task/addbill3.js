let bill = 0;
let Total = 0;

for(let i = 0;i < 10;i++)
{
    bill = Number(prompt("Enter a Number "));

    Total  = Total + bill;
}
console.log("Total of Bills are ",Total);