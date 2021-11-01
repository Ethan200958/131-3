couchImg = "";
status_ = "";
objects = [];

function preload() {
    couchImg = loadImage("couch.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetecting = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("CocoSSD INITIALIZED");
    status_ = true;
    objectDetecting.detect(couchImg, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    objects = results;
    }
}

function navigate() {
    window.location.href = "index.html"
}

function draw() {
    image(couchImg, 0, 0, 400, 400);

    if(status_ != "") 
    {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Currently detecting objects";

            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y,);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}