import{
    Point
}from './Point.js';

export class Wave{
    constructor(){

        this.totalPoints = 6;
        this.Points =[];    

        /*포인터 생성*/
        let xValue = 0;
        this.widthGap = document.body.clientWidth /5;
        for(let i = 0 ; i < this.totalPoints; i++){
            const point = new Point(i,xValue,document.body.clientHeight/2,100);
            this.Points.push(point);
            xValue += this.widthGap;
        }
    }

    resize(stageWidth,stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        /* 리사이즈 할때 마다 포인터의 x가 바껴야 하므로 */
        let xValue = 0;
        for(let i = 0 ; i < this.totalPoints ; i++){
            this.widthGap = this.stageWidth / 5 ;
            this.Points[i].resize(xValue);
            xValue +=this.widthGap;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = '#aaa';

        /*포인터 움직이는 반복문 */
        for(let i = 0 ; i < this.Points.length ; i ++){
            if(i==0 || i == this.totalPoints -1){
                continue;
            }
            this.Points[i].update();
        }
 
        /*포인트 찍은곳 연결하기 */
        let prevX = this.Points[0].x;
        let prevY = this.Points[0].y;

        ctx.moveTo(prevX,prevY);
        
        for(let i = 1; i < this.totalPoints;i++){
            let cx = (prevX + this.Points[i].x) /2 ;
            let cy = (prevY + this.Points[i].y) /2 ;

            ctx.quadraticCurveTo(prevX,prevY, cx, cy);

            prevX = this.Points[i].x;
            prevY = this.Points[i].y;
        }

        ctx.lineTo(this.Points[this.totalPoints-1].x,this.stageHeight);
        ctx.lineTo(this.Points[0].x,this.stageHeight);
        ctx.lineTo(this.Points[0].x,this.Points[0].y);
        ctx.stroke();
        ctx.closePath();
    }
}