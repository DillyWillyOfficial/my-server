const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use('/home', (req,res) => {
fs.readFile('home.html',(err,data)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    return res.end();
})
});
app.use('/about', (req,res) => {
    fs.readFile('about.html',(err,data)=>{
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
    });
app.use('/contact us', (req,res) => {
        fs.readFile('contact.html',(err,data)=>{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
        });
app.listen(PORT, () => {
    console.log(`server listening on PORT: ${PORT}`);
});