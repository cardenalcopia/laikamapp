const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist/laikamapp"));
app.get('*', function(request,response){
    response.sendFile("index.html", {root: __dirname + "/dist/laikamapp/"});
});
app.listen(process.env.PORT || 8080 );