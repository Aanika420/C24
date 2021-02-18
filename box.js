class Box {
  constructor(x,y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //can't write the name of the object in class
    this.body = Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push ();
    translate(pos.x,pos.y);
    rotate (this.body.angle);
    rectMode(CENTER);
    fill("orange");
    stroke ("brown");
    strokeWeight (5);
    //rect(pos.x, pos.y, this.width, this.height);
    rect(0,0,this.width,this.height);
    pop();
  }
};
