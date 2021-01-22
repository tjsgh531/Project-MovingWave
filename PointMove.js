export class PointMove{
    constructor(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

    
        this.speed = 0.1;
        this.currentValue = 0;
        this.fluctuation = 150;
        this.radius =30;

        this.resize();
    }

    resize(){
        this.startX = this.stageWidth /2;
        this.initY = this.stageHeight /2
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