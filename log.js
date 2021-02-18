class Log {
    constructor(x,y,height,angle) {
      //by default value of angle in this physics is in radian.You can change this mode:angleMode(DEGREES)
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      //can't write the name of the object in class
      this.body = Bodies.rectangle(x,y, 20, height, options);
      this.width = 20;
      this.height = height;
      Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rotate (this.body.angle);
      rectMode(CENTER);
      fill("green");
      //rect(pos.x, pos.y, this.width, this.height);
      rect(0,0,this.width,this.height);
      pop();
    }
  };
  