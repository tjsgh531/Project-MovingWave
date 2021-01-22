import{
    Point
}from './Point.js';

export class Wave{
    constructor(){

        this.totalPoints = 6;
        this.widthGap = this.stageWidth /5;
        this.Points =[];
        let xValue = 0;

        for(let i = 0 ; i < this.totalPoints; i++){
            const point = new Point(i,xValue,this.stageHeight/2,150);
            this.Points.push(point);
            xValue+=this.widthGap;
        }
        console.log(this.Points);
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = '#aaa';
        ctx.moveTo(this.Points[0].getPoint.x,this.Points[0].getPoint.y);
        
        for(let i = 0; i < this.totalPoints; i++){
            if(i==0 || i == this.totalPoints-1){
                this.Points[i].update(false);
            }
            else{
                this.Points[i].update(true);
            }
            ctx.lineTo(this.Points[i].getPoint.x,this.Points[i].getPoint.y);
        }
        ctx.lineTo(this.Points[this.totalPoints-1].getPoint.x,this.stageHeight);
        ctx.lineTo(this.Points[0].getPoint.x,this.stageHeight);
        ctx.lineTo(this.Points[0].getPoint.x,this.Points[0].getPoint.y);
        ctx.fill();
        ctx.closePath();
    }
}