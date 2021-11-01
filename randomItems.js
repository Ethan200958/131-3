randomItemsImg = "";

function preload() {
    randomItemsImg = loadImage("randomItems.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetecting = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Currently detecting objects";
}

function modelLoaded() {
    console.log("CocoSSD INITIALIZED");
    status_ = true;
    objectDetecting.detect(randomItemsImg, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    }
}

function navigate() {
    window.location.href = "index.html"
}

function draw() {
    image(randomItemsImg, 0, 0, 400, 400);
}