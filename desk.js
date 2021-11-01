deskImg = "";
status_ = "";
objects = [];

function preload() {
    deskImg = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetecting = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("CocoSSD INITIALIZED");
    status_ = true;
    objectDetecting.detect(deskImg, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
    console.log(results);
    objects = results;
    }
}
function navigate() {
    window.location.href = "index.html"
}

function draw() {
    image(deskImg, 0, 0, 400, 400);

    if(status_ != "") 
    {
        for (var i = 0; i < objects.length; i++) {

            document.getElementById("status").innerHTML = "Status: Currently detecting objects";
            percent = floor(objects[i].confidence*100);
            fill("#FF0000");
            stroke("FF0000");
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}