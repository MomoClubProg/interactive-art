const fs = require('node:fs');
const { exec } = require('node:child_process');

function createAnim(name) {

    
    let markup = fs.readFileSync('./template/index.html', 'utf-8');
    let script = fs.readFileSync('./template/main.js', 'utf-8').replace('ANIMATION_NAME', name);

    // Create new project based on the template
    if (!fs.existsSync(`./public/${name}/`)) fs.mkdirSync(`./public/${name}`);
    fs.writeFileSync(`./public/${name}/index.html`, markup, 'utf-8');
    fs.writeFileSync(`./public/${name}/main.js`, script, 'utf-8');
}

createAnim(process.argv[2] || 'newAnimation');