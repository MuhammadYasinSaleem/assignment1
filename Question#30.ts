let person:string[]=['admin','eric','yasin','ali','ahmad'];
for(let i=0;i<person.length;i++)
{
    if(person[i]=='admin')
    {
        console.log('Hello admin, would you like to see a status report?');
    }
    else if(person[i]=='eric'||'yasin'||'ali'||'ahmad')
    {
        console.log(`Hello ${person[i]}, thank you for logging in again.`);
        
    }
}
