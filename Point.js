export class Point{
    constructor(index,x,y,fluctuation){
        this.x = x;
        this.y = y;
        this.speed = 0.1;
        this.cur = index;
        this.fluctuationY = fluctuation;
    }

    getPoint(){
        const x = this.x;
        const y = this.updateY;
    }

    update(move){
        if(!move){
            this.updateY = this.y;
            return;
        }
        this.cur +=this.speed;
        this.updateY = this.y + Math.sin(this.cur) * this.fluctuationY; 
    }

}