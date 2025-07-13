// let Firstname=prompt("Enter your first name");
// let Lastname=prompt("Enter your last name");
// let msg="Welcome"+" "+Firstname+" "+Lastname;
// console.log(msg);
// alert(msg);
const http = require('http');
const port = 2000;
const fs = require('fs');

fs.writeFileSync('data.json','("name":"Dhruv Yadav"')