import{
    Wave
}from './Wave.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.Wave = new Wave();

        window.addEventListener('resize',this.resize.bind(this));
        this.resize();
        this.upadate();
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        this.Wave.resize();

    }

    upadate(){
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        this.Wave.draw(this.ctx);
        requestAnimationFrame(this.upadate.bind(this));
    }
}

window.onload = () => {
    new App();
};