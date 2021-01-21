import{
    Wave
} from './Wave.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        this.animate();
    }

    /* 화면 사이즈 조정시 실행되는 메소드 */
    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.canvas.width = this.stageWidth * 2; // 더큰 화면을 위해 *2를한다고 하는데 그런 디바이스를 사용해봐야 왜 필요한지 알듯...
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.wave.resize(this.stageWidth,this.stageHeight);//크기에따라 물결도 위치가 조정되야하므로
    }

    /* 움직임을 담당하는 메소드*/
    animate(){
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        this.wave.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this)); //왜 bind()를 해야할까???
    }
}

window.onload = () => {
    new App();
};