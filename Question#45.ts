type car=
{
    manufacturer:string;
    modelname:string;
    [key:string]:string |number;
}
function info(manufacturer:string,modelname:string,...argument:[string,string|number][]):car
{
    const infocar:car={
manufacturer,
modelname,
    };
for(const [key,value]of argument)
{
infocar[key]=value;
}
    return infocar;
}

const a=info('Toyota','corolla',['color','black'],['year','2020']);
console.log(a);
