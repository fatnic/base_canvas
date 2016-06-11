var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = canvas.width / 16*9;

var Mouse = new Vec2();

var isDrawing = false;
var drawing = {a: new Vec2(), b: new Vec2()};
var lines = [];
lines.push({a: new Vec2(100,100), b: new Vec2(200,200)});

function init() {
    loop();
}

function update() {
    if (isDrawing) drawing.b = Mouse.clone();
}

function draw() {
    Draw.clear(ctx, 'rgb(51,51,51)');

    if (isDrawing) {
        Draw.line(ctx, drawing.a, drawing.b, 'blue', 1);
        Draw.ring(ctx, drawing.a, 5);
    }

    for(var i=0; i < lines.length; i++) {
        Draw.line(ctx, lines[i].a, lines[i].b, 'white', 1);
    }
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

canvas.onmousedown = function(e) {
    drawing.a = Mouse.clone();
    isDrawing = true;
};

canvas.onmouseup = function(e) {
    drawing.b = Mouse.clone();
    lines.push({a: drawing.a, b: drawing.b});
    isDrawing = false;
};
