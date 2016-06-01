var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function init() {
    loop();
}

function update() {

}

function draw() {

}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

init();
