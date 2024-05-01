

class Ball{
    constructor(p,radius){
      this.r = radius;
      this.p = p;
      this.v = p5.Vector.random3D().normalize();
    }
    
    update(minV,maxV){
      
      let q = p5.Vector.add(this.p,this.v);  
      if((q.x - this.r) <= minV || (q.x + this.r) >= maxV){
        this.v.x = -this.v.x;
      }
      
      if((q.y - this.r) <= minV || (q.y + this.r) >= maxV){
        this.v.y = -this.v.y;
      }
      
      if((q.z - this.r) <= minV || (q.z + this.r) >= maxV){
        this.v.z = -this.v.z;
      }
      
      this.p.add(this.v);
    }
    
    render(){
      noStroke();
      //fill(150);
      fill(119,209,119,128);

      push();
      translate(this.p);
      sphere(this.r);
      pop();
    }
  }
  
  let ball;
  let box_size = 100;
  
  let num_balls = 100;
  let balls = [];
  
 let canvas;

  function setup() {
    canvas = createCanvas(400, 400,WEBGL);
    canvas.parent('sketch-holder');
    
    //ball = new Ball(createVector(0,0,0),10);
    for(let i = 0;i < num_balls;i++){
     balls.push(new Ball(createVector(0,0,0),10)); 
    }
  }
  
  function draw() {
    //background(100);
    background(119,119,209);
    
    //Global transforms
    if(mouseIsPressed){ 
    rotateY(frameCount * map(mouseX/width,0,1,-1,1)*.01);
    }

  
    
    //Draw spheres
    for(let i = 0;i < num_balls;i++){
      balls[i].update(-box_size,box_size);
      balls[i].render();
    }
    
    //Draw wire cube
    noFill();
    stroke(255);
    push();
    box(2*box_size);
    pop();
  }