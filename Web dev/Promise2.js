//Promise class give us a promise , that i will return u something in future 

//Set Time Out Basic ( Call back)
function log_name(){
console.log("name")
}
setTimeout(log_name,3000);
//Ab ye function ko 3000 milliseconds ke baad call karega

//How it would be written in promise
setTimeoutPromisified(3000).then(callback)

function setTimeoutPromisified(ms){
let p=new Promise(resolve=>setTimeout(
resolve,ms));

//Function ke andar Function daalke call karna ( Using Call back) 
function waitfor3s(resolve){
setTimeout(resolve,3000)}
function main (){
console.log("main is called");
}
waitfor3s(main)

//Function ke andar Function daalke call karna ( using Promise)

//Promise ke andar jo input hai (argument), woh function ke andar jo pehla argument hai ,jab woh call hoga toh .then () call hoga 

function waitfor3s(resolve)
{
setTimeout(resolve,3000)
}

function setTimeoutPrmisified(waitfor3s)
{
function main(){
console.log("main is called");
setTimeoutPromisified ().then(main);
}
