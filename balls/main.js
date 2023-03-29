let d= 20
let quantite = 400/d

function setup() {
  createCanvas (400,400)
}

function draw() {
  background(0);
  
  for (let j= 0;j < d;j++) {
    
    for (let i = 0; i < d;i++) {

      let x = i*quantite+d/2;
      let y = j*quantite+d/2;
        
      let length = dist(x, y, mouseX, mouseY);
      
      fill( 1/(9* length), 6* length, 10 * length)
      circle (x, y, min(25, length));
      
    }
    
  }
}
