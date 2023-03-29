let RADIUSES = [100, 100, 100, 100, 100, 100];
let SPEED = 0.75;
let angle = 0;
let offset = 0;
let tick = 0;
let primes = [];

function setNumbers(values) {
  RADIUSES = values;
}

function addRadius(n) {
  
  RADIUSES.push(n);
  primes = getPrimes();
}

function isOdd(n) {
  return n % 2 !== 0; 
}

function getPrimes() {
  let ans = [];
  let i = 0;
  while(ans.length <= RADIUSES.length) {
    if (isOdd(i)) ans.push(i)
    if (i >= 30) break;
    i++;
  }

  return ans;
}

function setup() {
    createCanvas(400, 400);
    primes = getPrimes();
    angle = PI/2
}

let x = 0;
let y = 0;
let points = [];

function draw() {
    background(51);
    noFill();
    stroke(255);

    let px = 150;
    let py = 200;
   
    

    for (let i = 0; i < RADIUSES.length; i++) {
    
      let p = primes[i];
      circle(px, py, (RADIUSES[i]*4)/(p*PI));
      px += RADIUSES[i]*2 * cos(angle*p)/(p*PI);
      py += RADIUSES[i]*2 * sin(angle*p)/(p*PI);

      angle += HALF_PI/128 * SPEED;
    
      if (
        tick % 1 === 0 &&
        i >= RADIUSES.length-1
      ) {
        x = px;
        y = py;


      if (points.length > 200) points.splice(0, 1);
        points.push({x:265, y:py})
      } 
    }

    beginShape();
    for (let i = 0; i < points.length; i++) {
      vertex(points[i].x,points[i].y);
      points[i].x+=SPEED;
    }
    endShape();
    stroke(255, 0, 0)
    line(x , y, points[points.length-1].x, y);

    tick++;
    if (offset >= 400) offset = 0;
    else offset++;
}
