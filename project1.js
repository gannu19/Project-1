const express = require("express");
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.json({
        name: "Bhukya ganapathi",
        college : "IIT KGP",
        Roll_Number : "22MT30011"
    })
})