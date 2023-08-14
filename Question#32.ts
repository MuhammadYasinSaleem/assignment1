let current_users:string[]=['yasin','ali','ahmad','umer','bilal'];
let new_users:string[]=['haris','umer','muzammil','ALI','shahzaib'];
for(let users of new_users )
{
let upper:string=users.toUpperCase();
let lower:string=users.toLowerCase();
if(current_users.includes(upper))
{
    console.log(`${users} not available`);
    
}

else if(current_users.includes(lower))
{
    console.log(`${users} not available`);
}
else{
    console.log(`${users}  is available`);
    
}
}
