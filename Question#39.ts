function city_country (city:string,country:string):string
{
return `"${city},${country}"`;
}
const c1=city_country('lahore','Pakistan');
const c2=city_country('Karachi','Pakistan');
const c3=city_country('Cairo','Egypt');
console.log(c1);
console.log(c2);
console.log(c3);
