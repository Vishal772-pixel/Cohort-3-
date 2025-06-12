
//Basic OOPs JavaScript 

class Rectangle {
constructor(width,height,color)
{
this.widhth='width',
this.height='height',
this.color='color',
}
area(){
const area = this.width*this.height;
return area;
}
paint(){
console.log("Painting with colors ${this.color}");
}
}
const rect = new Rectangle(2,9)//new object instance 
const area=rect.area();
console.log(area)


//Current time,Date Functions
const now = newDate();
console.log(now.ISOString());
console.log(now.getTime());//inbuild function hai javascript ka ...cutrent time,date batane ke liye use hota hai 


//Map
const map = new Map();
map.set('name','Alice');
map.set('age','30')
console.log(map.get('name'));//.get se value ko acces kar sakte hai
