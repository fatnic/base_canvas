'esversion: 6';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var TMX;
var Walls = [];
var allWall;
var vis = new Vision();

var assets = {
    base: '../assets/',
    paths: [ 'tiles.png', 'map.json' ]
};

var AM = new AssetManager(assets);
AM.downloadAll(init);

function init(){
    TMX = new TMXLoader(AM, 'map');
    canvas.width = TMX.canvas.x;
    canvas.height = TMX.canvas.y;

    var walls = TMX.getObjectsFromLayer('wallboundaries');

    for (var i = 0; i < walls.length; i++) {
        var w = walls[i];
        Walls.push(new Wall(w.x, w.y, w.width, w.height, w.visible));
    }

    vis.source.set(40,40);
    vis.setColour('rgba(255,255,255,0.4)');

    allWall = allWallSegments();

    loop();
}

function loop() {
    window.requestAnimationFrame(loop);
    update();
    draw();
}

function update() {
    vis.calc(allWall);
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    TMX.draw(ctx);
    DrawTools.polygon(ctx, vis.polygon, vis.colour);
}

canvas.onmousemove = function(event) {
    vis.heading = vis.source.angleTo(new Vec2(event.clientX, event.clientY));
};

canvas.onclick = function(event) {
    vis.source.set(event.clientX, event.clientY);
};
