//Promisified Version of fs.readfile
count fs =require("fs");
function read_The_File(send_The_Final_Value_Here){
fs.readFile("a.txt","utf-8",function(err,data)
{
send_The_Final_Value_Here(data);
})
}

function readfile(fileName){
return new Promise(read_The_File);
const p=readFile();
function call back(contents){
console.log(contents);
}
p.then(call back)
