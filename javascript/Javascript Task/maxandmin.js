let arr = [20,56,90,23,78,99];
let Max = 0;
let Min = 0;
let i = 0;

for(i = 0; i < arr.length; i++)
{
    if(Max < arr[i] || i === 1)
    {
        Max = arr[i];
    }
}
console.log("Maximum Number From Array are",Max);

for(i = 0; i < arr.length; i++)
{
    if(Min > arr[i] || i === 1)
    {
        Min = arr[i];
    }
}
console.log("Minimum Number From Array are",Min);