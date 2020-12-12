class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:12
        }
        this.sling = Constraint.create(options)
        
        World.add(world, this.sling);
      }
      display(){
        if(this.sling.bodyA!==null){
          var posA = this.sling.bodyA.position;
          var posB = this.sling.pointB;
          strokeWeight(5);
          stroke("black");
          line (posA.x,posA.y,posB.x,posB.y); 
        }
        
      }

      fly(){
        this.sling.bodyA=null;
      }
}