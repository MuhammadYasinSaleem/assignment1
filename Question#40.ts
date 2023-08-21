
function make_album(artistname:string,albumtitle:string,tracks?:number)
{
let album:{name:string,title:string,tracks?:number}=
{
    name:artistname,
    title:albumtitle,
    tracks:tracks
}
return album;
}
const a1=make_album('Atif Aslam','Tu jane na');
const a2=make_album('Taylor Swift','BlankSpace',10);
const a3=make_album('Atif Aslam','Tera Hua',12);
console.log(a1);
console.log(a2);
console.log(a3);
