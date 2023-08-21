function make_great(name:string[])
{
const arr=name.map((val)=>val+" the great");
return arr;
}
function show_magicians(name:string[])
{
console.log(name);

}
let name:string[]=['ali','ahmad','haris'];
 name=make_great(name);
show_magicians(name);
export{}
