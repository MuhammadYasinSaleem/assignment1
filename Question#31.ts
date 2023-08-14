// If the list is empty, print the message We need to find some users!
let user:string[]=['ali','ahmad'];
if(user.length==0)
{
    console.log('we need to find some users');
}
else
{
    console.log('users are available');
    
}
// Remove all of the usernames from your array, and make sure the correct message is printed.
user.splice(0);
if(user.length==0)
{
    console.log('we need to find some users');
    
}
