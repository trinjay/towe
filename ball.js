class Ball extends BaseClass {
    constructor(x,y){
        super(x,y,50,50);
        this.image=loadImage("sprites/rock.png");
    }
    display(){
        super.display();
    }
}