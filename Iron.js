class Iron{
    constructor(x, y,width) {
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30,
        };
        //this.x=x;
        //this.y=y;
        this.width=width;
        this.body = Bodies.rectangle(this.x, this.y,30,width, options);
       
        
      
        World.add(world, this.body);
      };
      display(){
        var pos =this.body.position;
        width = this.body.width;

        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("brown");
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop();
      };
    };
    