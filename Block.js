// Block.js

class Block {
    constructor(x) {
        this.x = x;
        this.y = bobBaseY - 10;
        this.width = 60;
        this.height = 60;
        this.xVelocity = random(-2,-1);
        this.tolerance = 5;
    }

    draw() {
        fill(150, 75, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (bob.x > 0)
        {
            this.x += this.xVelocity; // Move left like obstacles
            if (this.x < bob.x - windowWidth / 2) {
                this.x = bob.x + random(700, 2000);
            }
            this.pushBob();
        }
    }
    
    pushBob(){
        let blockLeftEdge = this.x + this.width/2;
        let bobRightEdge = bob.x + bob.size;
        //text("Block X" + this.x, this.x, this.y - 50);
        //text("blockLeftEdge/bob" + blockLeftEdge, bob.x, this.y - 50);
        //text("bobLeftEdge" + bobRightEdge, bob.x, this.y - 100);
        if (Math.abs(bobRightEdge - blockLeftEdge) <= this.tolerance ){
            bob.x += this.xVelocity;
            bob.isBeingPushed = true;
        }
        else {
            bob.isBeingPushed = false;
        }
    }
}
