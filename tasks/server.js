const fs = require('fs');
const express = require('express');

const server = express();
server.use(express.json())
server.use(express.static(__dirname + '/public'))

server.get('/getAnims', (req, res) => {
    
    let dirs = fs.readdirSync('./public')
        .filter(file => fs.statSync('./public/' + file).isDirectory());
    
    
    let animations = [];
    
    dirs.forEach(dir => {
        let path = `./public/${dir}`;

        let script = fs.readFileSync(path + '/main.js', 'utf-8');
        let markup = fs.readFileSync(path + '/index.html', 'utf-8');
        
        animations.push({
            script, markup, path:dir
        });
    
    });
    
    res.send(animations);
});

server.listen(3000);