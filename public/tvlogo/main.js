let x = 200;
let y = 200;

let vx;
let vy;

let w = 60;
let h = 60;

function setup() {
    createCanvas(400, 400);
    vx = random(-15, 15);
    vy = random(-15, 15);
}

function draw() {
    background(51);

    // Render
    stroke(0);
    fill(255, 0, 0);
    rect(x, y, w, h);


    // Update
    if (x < 0 || x > 400 - w) vx *= -1;
    
    x += vx;

    if (y < 0 || y > 400 - h) vy *= -1;
    
    y += vy;
}