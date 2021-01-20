class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild('canvas');
        window.addEventListener('resize',onResize);
        this.onResize();
        requestAnimationFrame(this.animate.bind(this));
    }

    onResize(){
        this.stageWidth = docu
    }
}