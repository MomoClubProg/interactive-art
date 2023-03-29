class Clock {
  constructor(x, y, size, delta) {
    this.pos = createVector(x, y);
    this.angle = 0;
    this.size = size;
    this.delta = delta;
  }

  update() {  

    if (this.angle >= TWO_PI) this.angle = 0;

    this.delta *= 0.93;
    this.angle += this.delta + 0.04; 
    
    this.mouseRepulsion();
    this.renderLine();
  }

  mouseRepulsion() {

    if (mouseX <= 0 || mouseX >= wnx) return;
    if (mouseY <= 0 || mouseY >= wny) return;

    
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y)
    if (d > 224) return;
    this.delta += 0.75 * (1 / (d/2)) * atan(abs(
        (this.pos.y - mouseY) /
        (this.pos.x - mouseX)
    ));
  }

  renderLine(x, y) {
    let dx = (this.size)/2 * cos(this.angle) + 18;
    let dy = (this.size)/2 * sin(this.angle) + 18;
  
    stroke(210,210,210);
    strokeWeight(2);
  
    line(this.pos.x - dx,this.pos.y - dy, dx + this.pos.x, dy + this.pos.y);
  }

}


const op = (i, j) => {
  return i * j / 5000;
}


let clocks = [];
let size = 16;
const BIG_S = 0.0010; 

function setup() {
  createCanvas(wnx, wny);
  frameRate(70);
  for (let i = 0; i < wnx / size; i++) {
    for (let j = 0; j < wny / size; j++) {
      clocks.push(new Clock(
        i * size + size/2,
        j * size + size/2,
        size,
        op(i, j),
        i, j
      ));
    }
  }


}
let wnx = 400
let wny = 400;
function draw() {
  background(51);
  for (let i = 0 ; i < clocks.length; i++) {
    clocks[i].update();
    clocks[i].renderLine();
  }
}
