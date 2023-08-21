function sandwich(...items:string[])
{
for(const item of items)
{
    console.log(item);
}
console.log('\n');

}
sandwich('Tomato','Mayo');
sandwich('tomato','Mayo','Ketchup');
sandwich('tomato','Mayo','Ketchup','Chicken');
