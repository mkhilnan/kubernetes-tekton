const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World Tekton by Student Name");
});

app.listen(4000, function(){
    console.log('Hello World Tekton App listening on port 4000');
});

