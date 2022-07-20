function preload() {
    m = loadImage('mustache.png');
}

mustaX = 15;
mustaY = 15;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(m, mustaX, mustaY, 100, 50);
    
}

function modelLoaded(){
    console.log("model is loaded");

}

function gotPoses(result) {
    console.log(result);
    if (result.length>0) {
        mustaX=result[0].pose.nose.x-50;
        mustaY=result[0].pose.nose.y-15;
    }
}