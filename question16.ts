let guestList:string[]=['Haris','umer','Hamza'];
for(let i=0;i<guestList.length;i++)
{
    console.log(`Dear ${guestList[i]} you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}

console.log("WE FOUND A BIG DINNER TABLE");

guestList.unshift('Muneeb');

guestList.splice((guestList.length/2),0,'Shahzaib');

console.log("== UPDATED INVITATION MESSAGE ==");

for(let i=0;i<guestList.length;i++)
{
    console.log(`Dear ${guestList[i]} you are cordially invited to dinner at my place. It would be an honor to have you join us.`);
}
