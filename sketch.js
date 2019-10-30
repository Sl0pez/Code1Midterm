//Santiago Lopez
//Code 1
//Midterm White Box



let char;
let scene = 1;
let sSwitch1l = false;
let sSwitch1r = false;
let sSwitch2l = false;
let sSwitch2r = false;


function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);

  char = new Char(300, 350);
}

function draw() {
  background(220);

  backg();

  trans1();

  char.show();
}

class Char {

  constructor(x, y) {
    this.charX = x;
    this.charY = y;
  }

  show() {
    noStroke();
    fill(255);
    rect(this.charX, this.charY, 60, 100);
  }


}

function backg() {


  strokeWeight(1);
  //walls
  stroke(1);
  fill(242, 242, 242);
  rect(width / 2, height / 2 - 55, width + 5, 291);
  //floor
  noStroke();
  fill(230, 228, 216);
  rect(width / 2, 348, width, 115);


  //doors
  stroke(1);
  fill(91, 68, 62);
  //left
  rect(width / 4, 200, 120, 180);
  ellipse(width / 4 + 50, 200, 10, 10);
  //right
  rect(width / 4 * 3, 200, 120, 180);
  ellipse(width / 4 * 3 + 50, 200, 10, 10);

  //textbox
  strokeWeight(6);
  stroke(250, 250, 210);
  fill(240, 230, 140);
  //left
  rect(width / 4, 55, 240, 70);
  //right
  rect(width / 4 * 3, 55, 240, 70);

}

function s1() {

  noStroke();
  fill(0);

  //left choice
  textAlign(CENTER, CENTER);
  text('Scene 1 a', width / 4, 55, 240, 70);

  //right choice
  textAlign(CENTER, CENTER);
  text('Scene 1 b', width / 4 * 3, 55, 240, 70);


}

function trans1() {
  if (sSwitch1l == true) {
    s2La();
  } else if (sSwitch1r == true) {
    s2Ra();
  }

  if (keyIsPressed === true) {
    if (keyCode == LEFT_ARROW) {
      if (sSwitch1l) {
        sSwitch1l = false;
      } else {
        sSwitch1l = true;
      }
    } else if (keyCode == RIGHT_ARROW) {
      if (sSwitch1r) {
        sSwitch1r = false;
      } else {
        sSwitch21r = true;
      }
    }
  }

}


function s2La() {

  noStroke();
  fill(0);

  //left choice
  textAlign(CENTER, CENTER);
  text('Scene 2 a', width / 4, 55, 240, 70);

  //right choice
  textAlign(CENTER, CENTER);
  text('Scene 2 a', width / 4 * 3, 55, 240, 70);

}

function s2Ra() {

  noStroke();
  fill(0);

  //left choice
  textAlign(CENTER, CENTER);
  text('Scene 2 b', width / 4, 55, 240, 70);

  //right choice
  textAlign(CENTER, CENTER);
  text('Scene 2 b', width / 4 * 3, 55, 240, 70);


}


function s3La() {

  noStroke();
  fill(0);

  //left choice
  textAlign(CENTER, CENTER);
  text('Scene 3 a', width / 4, 55, 240, 70);

  //right choice
  textAlign(CENTER, CENTER);
  text('Scene 3 a', width / 4 * 3, 55, 240, 70);


}