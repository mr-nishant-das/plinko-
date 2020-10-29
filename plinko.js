class plinko{
    constructor(x, y){
        var options ={
            'isStatic':true,
            'restitution': 1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}