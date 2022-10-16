class Node {
    constructor(parent, n) {
        
        this.parent = parent;
        this.childs = new Array(n);
    
    }

    setChilds(childs) { this.childs = childs; }
    addChild(index, childValue) {
        this.childs[index] = childValue;
    }
}


class Tree {
    constructor(x, y) {
        this.root = new Node(this);
        this.root.addChild(0, new Node(this.root, ));
        this.pos = createVector(x, y);
        this.length = 40;
        this.angle = PI;
        this.offset = 0;
    }

    render(x=this.pos.x, y=this.pos.y, c=0, angle) {
        stroke(255, 40)
        if (c > 9) return;
        let nx1 = 0;
        let ny1 = 0;
        let nx2 = 0;
        let ny2 = 0;
        
        this.angle = map(mouseX,0, 400, 0, 2*HALF_PI );
        nx1 = this.length * cos(this.angle/2 * c/7 * noise(this.offset + c));
        ny1 = this.length * sin(this.angle/2 * c/7 * noise(this.offset + c));

        nx2 = this.length * cos(-this.angle/2 * c/7 * noise(this.offset + c));
        ny2 = this.length * sin(-this.angle/2 * c/7 * noise(this.offset + c));
        
        line(x, y, nx1 + x, ny1 + y);
        this.render(nx1 + x, ny1 + y, c+1, this.angle/2 * c/7 + angle);

        line(x, y, nx2 + x, ny2 + y);
        this.render(nx2 + x, ny2 + y, c+1, -this.angle/2 * c/7 + angle);

        this.offset += 0.00001;
    }

}
let tree;
function setup() {
    createCanvas(400, 400);
    tree = new Tree(200, 200);
}
function draw() {
    background(51);
    tree.render(0, 200);
}