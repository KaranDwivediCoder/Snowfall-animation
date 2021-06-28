class Snow{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.8
        }
        this.body=Bodies.circle(x,y,40,options)
        World.add(world,this.body)
        }
}