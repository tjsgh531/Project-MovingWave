import{
    PointMove
}from './PointMove.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize',this.resize.bind(this));
        this.resize();

        this.pointMove = new PointMove(
            this.stageWidth,
            this.stageHeight,
            document.body.clientWidth / 2,
            document.body.clientHeight / 2,
            30,);
        this.upadate();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
    }

    upadate(){
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        this.pointMove.draw(this.ctx);

        requestAnimationFrame(this.upadate.bind(this));
    }
}

window.onload = () => {
    new App();
};