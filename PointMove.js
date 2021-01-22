export class PointMove{
    constructor(stageWidth, stageHeight, x, y, radius){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.x = x;
        this.y = y;
        this.radius =radius;
        this.speed = 0.1;
        this.currentValue = 0;
        this.fluctuation = 150;
    }

    resize(){

    }

    draw(ctx){

        this.y = Math.sin(this.currentValue) * this.fluctuation;
        this.currentValue += this.speed;

        ctx.beginPath();
        ctx.fillStyle = '#aaa';
        ctx.moveTo(this.x,this.y);
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
        
    }
}