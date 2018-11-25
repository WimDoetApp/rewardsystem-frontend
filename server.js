//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/reward-system'));
app.use(express.static('/dist/reward-system'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('/dist/reward-system/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);