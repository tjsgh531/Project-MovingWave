export class PointMove{
    constructor(stageWidth,stageHeight){
        this.speed = 0.1;
        this.currentValue = 0;
        this.fluctuation = 150;
        this.radius =30;

        this.resize(stageWidth,stageHeight);
    }

    resize(stageWidth,stageHeight){
        this.startX = stageWidth /2;
        this.initY = stageHeight /2;
    }

    draw(ctx){

        this.startY = this.initY + Math.sin(this.currentValue) * this.fluctuation;
        this.currentValue += this.speed;

        ctx.beginPath();
        ctx.fillStyle = '#aaa';
        ctx.arc(this.startX, this.startY, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
        
    }
}