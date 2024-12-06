class ao{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.s = 1;
    }

    move(){
        this.x += random(-2, 2)
        this.y += random(-2, 2)
    }

    display(){
        strokeWeight(4);
        point(this.x, this.y)
    }

}