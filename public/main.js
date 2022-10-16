
//    <iframe style="padding:4px;"width="408" height="408" src="./clocks/index.html"/> 


function main(data) {

    for (let i = 0; i < data.length; i++) {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', `./${data[i].path}/index.html`);
        iframe.setAttribute('height', `420`);
        iframe.setAttribute('width', `420`);
        iframe.setAttribute('frameBorder','0')
        document.body.appendChild(iframe);
    }

}

    fetch('http://127.0.0.1:3000/getAnims')
    .then(res => res.json())
    .then(data => main(data))
