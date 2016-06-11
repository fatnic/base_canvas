var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = canvas.width / 16*9;

var Mouse = new Vec2();

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

canvas.onmousemove = function(event) {
    Mouse.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    Mouse.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
};
