class Stone{
  constructor(x, y,height,width) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12,
    }
    this.body = Bodies.rectangle(x, y, 20,width, options);
    this.width = 20;
    this.height = height;
    World.add(world, this.body);
      };
      display(){
        var pos =this.body.position;
        width = this.body.width;

        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("brown");
        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop();
      };
    };
    