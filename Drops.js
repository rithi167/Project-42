class Drops{
    constructor(x,y) {
        var options = {
           restitution:0.8,
        friction:0.1
         
        }
     this.x = x;
     this.y = y;
    this.r = 5;
    this.image = loadImage("raindrop.png")
     this.rain = Bodies.circle(x, y, this.r, options);
     World.add(world, this.rain); 
 }
updateY(){
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)}) 
    }
}

display()
{

    push();
    translate(this.rain.position.x, this.rain.position.y);
    rotate(this.rain.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
    
   
     
     
        
      
    
    }
}
