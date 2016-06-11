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
    Draw.clear(ctx, 'rgb(51,51,51)');
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

init();

canvas.onmousemove = function(event) {
    var rect = canvas.getBoundingClientRect();
    Mouse.x = event.clientX - rect.left;
    Mouse.y = event.clientY - rect.top;
};
