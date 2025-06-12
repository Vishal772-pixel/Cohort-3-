
//Middleware--> (req,res)cycle
//--> Execute any code
//-->Make changes to the request and the request object
//--> End the request -response cycle 

//Most simple middleware for ticket Buyer in Amusement 
const express from "express"
const app = express();
function ticketchecker(req,res,next)
{ 
const ticket = req.query.ticket;
if(ticket==free)
{
next()
}
else{
res.send(403).send("Access Denied")
}
}


app.use(ticketchecker);
app.get("/ride1",function()){
res.send("U rode the first ride");

app.get("/ride2", function()){
res.send("U rode the second ride");


app.get("/ride3",function()){
res.send("U rode the third ride");
});
app.listen(3000);