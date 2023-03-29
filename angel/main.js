//variables
var r;
var b;

function setup() {
  createCanvas(400, 400, WEBGL);
  r = color(255, 0, 0);
  b = color(0, 0, 255);
}

function draw() {
  background(10);
  orbitControl(5, 5, 5); 
  ///lets you move the object with it being in the center

  push();
  
  noStroke();
  let g = color(255, 0, 0);
  fill(g);
  emissiveMaterial(255, 255, 100);
  sphere(20); 
  pop();
 /// creates yellowish sphere. glowing?
  
  push();
  noFill();
  var t = map(mouseX, 0, width, 0, 1.0);
  var a = lerpColor(r, b, t);
  stroke(a);

  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  sphere(30);
  pop();
  ///??? transparency I guess ????///

  spotLight(color(255), -50, 0, 0, 1, 0, 0);

  push();

  stroke(95,40);

  let c = color(255, 255, 255);
  fill(c);
  
  rotateZ(frameCount * 0.009);
  rotateX(frameCount * 0.009);
  rotateY(frameCount * 0.009);
  
  torus(70, 8);

  let d = color(230, 230, 230);
  fill(d);
  
  rotateZ(frameCount * 0.007);
  rotateX(frameCount * 0.007);
  rotateY(frameCount * 0.007);
  
  torus(100, 8);

  let e = color(200, 200, 200);
  fill(e);
  
  rotateZ(frameCount * 0.007);
  rotateX(frameCount * 0.007);
  rotateY(frameCount * 0.007);

  torus(130, 8);

  let f = color(180, 180, 180);
  fill(f);
  
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  
  torus(160, 8);

  pop();

  ///torus that rotates at a defined speed
}
