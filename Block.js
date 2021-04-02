class Block {
    constructor(x,y,width,height){
    var options={
        restitutuon:0.4,
        friction :1.0
        
        //isStatic:true
    }
    this.body= Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    this.visibility=255

    }
    display(){
    
    var pos=this.body.position
    
   
    
    rectMode(CENTER)
    
    
    if(this.body.speed<3){
        rect(pos.x,pos.y,this.width,this.height)
        
        }
        else{
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility - 5
        tint(255,this.visibility)
        
        pop()
        }
    }
    
    }