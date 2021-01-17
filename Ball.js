class Ball{
    constructor(x,y,r){

        this.r = r;

        this.body = Bodies.circle(x,y,this.r,{isStatic:false});
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}