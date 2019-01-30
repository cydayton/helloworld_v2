var backgroundimg, sailboat, picnic;
var sailX;
let font,
  fontsize = 30;

function preload(){
    song = loadSound('assets/bobmarley.mp3');
    font = loadFont('assets/Brush Script.ttf');

}

function setup(){
    createCanvas(800, 800);
    backgroundimg = loadImage('assets/background.jpg');
    sailboat = loadImage('assets/sailboat.png');
    picnic = loadImage('assets/picnic.jpg')

    slider = createSlider(0, 1, 0.5, 0.01);

    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
    

}

function draw(){
    background(backgroundimg);

    textAlign(CENTER);
    drawWords(width * 1);

    image(picnic, mouseX-50, 0, picnic.width/3, picnic.height/3)

    image(sailboat, mouseX-780, 0, sailboat.width/3, sailboat.height/2.5);


 
    song.play();
    song.setVolume(slider.value());


}

function drawWords(x) {
    // The text() function needs three parameters:
    // the text to draw, the horizontal position,
    // and the vertical position
    fill(255);
    stroke(255, 216, 0);
    text("Don't worry about a thing", 480, 100+(10*cos(TWO_PI*frameCount/120)));

  }