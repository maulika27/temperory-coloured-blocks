class Chain{
    constructor(bodyA,pointB){
    
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.6,
            length : 150
        }
        this.chain= Constraint.create(options);
        World.add(world, this.chain);
        
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;

        strokeWeight(3.4);
                line (pointA.x, pointA.y, pointB.x, pointB.y);
    }
 
}