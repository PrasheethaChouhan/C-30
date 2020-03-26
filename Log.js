class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display()
  {
    if(this.body.speed>5)
    {
      push();
      this.visibility = this.visibility+100; 
      World.remove(world,this.body);
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y)
    }
    else
    {
      super.display();
    }
    pop();
  }
}