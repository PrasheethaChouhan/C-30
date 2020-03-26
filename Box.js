class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
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
};
