let color = '#080808'
let strokeWidth = 4

let socket = io();

socket.on("connect", () => {
    console.log("Connection established to server via socket")
});

socket.on("serverData", (data) => {
    drawPainting(data);
});

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.id("my-canvas");
    canvas.position(500, 200);
    canvas.background(255);
}

function mouseDragged() {

    let mouseObj = {
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY,
        color: color,
        strokeWidth: strokeWidth
    }
    socket.emit("mouseData", mouseObj);
}

function drawPainting(data) {
    stroke(data.color);
    strokeWeight(data.strokeWidth);
    line(data.x, data.y, data.px, data.py);
}