// import * as express from 'express'
const express = require('express');
const app = express();
// Allow any method from any host and log requests
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
//     if('OPTIONS' === req.method) {
//         res.sendStatus(200);
//     } else {
//         console.log(`${req.ip} ${req.method} ${req.url}`);
//         next();
//     }
// }
//test CORS header fix *==TEST CASE CHANGE DEAFAULT ALOW ALL TO CERTAIN PROXY
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
                res.sendStatus(200);
            } else {
                console.log(`${req.ip} ${req.method} ${req.url}`);
                next();
            }
});
// Handle POST requests that come in formatted as JSON

const fs = require('fs');


app.use(express.json())

app.get('/todos', (req, res) => {
    const jsonData = require('./toDo.json');
    const sendToDo = [];
    const sendNotToDo = [];
    jsonData.forEach(value => {
        if (value.completed) {
            const obj = Object.assign(
                {},
                {id:value.id,title:value.title}
            )
            sendToDo.push(obj);
        } else {
            const notsObj = Object.assign(
                {},
                {id:value.id,title:value.title}
            )
            sendNotToDo.push(notsObj);
        }
    });
    res.send(sendToDo);
});
app.get('/not-todos', (req, res) => {
    const jsonData = require('./toDo.json');
    const sendToDo = [];
    const sendNotToDo = [];
    jsonData.forEach(value => {
        if (value.completed) {
            const obj = Object.assign(
                {},
                {id:value.id,title:value.title}
            )
            sendToDo.push(obj);
        } else {
            const notsObj = Object.assign(
                {},
                {id:value.id,title:value.title}
            )
            sendNotToDo.push(notsObj);
        }
    });
    res.send(sendNotToDo);
});
app.post('/move', (req, res) => {
    
    let jsonFile = require('./toDo.json');
    console.log(jsonFile);
    jsonFile.forEach(value => {
        if(value.id == req.body.id){ 
            value.completed = !value.completed;
        }
    })
    
    try {
        let data = JSON.stringify(jsonFile);
        fs.writeFileSync('./server/toDo.json', data);
    } catch (err) {
        console.log('Error writing Metadata.json:' + err.message)
    }
    
});
// start our server on port 4201 localhost
app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});