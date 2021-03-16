const http = require('http');
const hostname = '127.0.0.1';
const express=require('express');
const app=express();
const port=80;
const fs=require('fs');
app.use(express.urlencoded());
const home=fs.readFileSync('../html/front.html');
app.get('/',(req,res)=>{
  res.end(home);
})
app.post('contest.html',(req,res)=>{
  name=req.body.name;
  phone=req.body.phone;
  email=req.body.email;
  address=req.body.address;
  let info=`Name:${name}\nPhone No.:${phone}\nEmail ID:${email}\nAddress:${address}\n`;
  fs.writeFileSync("Contest.txt",info);
  const params={'message':"Your Form has been Submitted"};
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});