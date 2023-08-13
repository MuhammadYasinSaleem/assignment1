// Tests for equality and inequality with strings
let str:string="Ahmad";
    console.log(str=='Ahmad');
    console.log(str!='Ahmad');

    // Tests using the lower case function
    console.log(str==str.toLowerCase());

    // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    let no:number=7;
    console.log(no==7);
    console.log(no!=7);
console.log(no>8);
console.log(no<12);
console.log(no>=7);
console.log(no<=3);

// Tests using "and" and "or" operators
console.log(no==7&&str=='Ahmad');
console.log(no==7 || str=='Ali');

// Test whether an item is in a array
let arr:number[]=[2,4,7,9];
for(let i=0;i<arr.length;i++)
{
console.log(arr[i]==2);
}
// Test whether an item is not in a array
for(let i=0;i<arr.length;i++)
{
console.log(arr[i]==5);
}
