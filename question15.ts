let guestList:string[]=['Haris','umer','Hassan'];
for(let i=0;i<guestList.length;i++)
{
    console.log(`Dear ${guestList[i]} you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}


let guestNotMakeIt=guestList[1];
console.log(`Unfortunately ${guestNotMakeIt} can't make it to the dinner.`);


guestList[1]='shahzaib';

console.log("Updated Invitation Message ");
for(let i=0;i<guestList.length;i++)
{
    console.log(`Dear ${guestList[i]} you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}
