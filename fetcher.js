const arg = process.argv.slice(2);

const fs = require('fs');
const request = require('request');
const url = arg[0];
const path = arg[1];


request(url, (err, res, body)=>{
  if (!err){
    fs.writeFile(path, body, (error) => {
      if (!error) console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`); 
    });
  }
});