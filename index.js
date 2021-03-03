const express = require("express")
const fs = require("fs")

const app = express()

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.use(express.json())

let data = JSON.parse(fs.readFileSync("./data.json"))

// API

app.post("/api/input", function(req, res) {
    const json = req.body
    console.log(req.body)
    data.concat(json)
    fs.writeFileSync("./data.json", JSON.stringify(data))
    res.send("yeet")
})

app.get("/api/input", (req, res) => res.json(data))

// FORONTEND

app.use(express.static('public'))

app.listen(process.env.PORT || 5000)
