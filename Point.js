export class Point{
    constructor(index,x,y,fluctuation){
        this.x = x;
        this.y = y;
        this.centerY = y;
        this.speed = 0.1;
        this.cur = index;
        this.fluctuationY = fluctuation;
    }

    update(){
        this.y = this.centerY + Math.sin(this.cur) * this.fluctuationY; 
        this.cur += this.speed;
    }

    resize(newXValue){
        
        this.x = newXValue;

    }

}