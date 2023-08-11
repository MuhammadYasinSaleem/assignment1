let guestList:string[]=['Haris','umer','Hamza','ali'];
for(let i=0;i<guestList.length;i++)
{
    let p=guestList.pop();
    console.log(`sorry ,${p} you are not invited`);
    if(guestList.length==2)
    {
     break;
    }
}
for (let i=0;i<guestList.length;i++)
{
    console.log(` ${guestList[i]} you are still invited`);
}
guestList.splice(0);
console.log(guestList);
