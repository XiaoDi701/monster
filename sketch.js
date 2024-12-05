let img;
let brushActive = false;
let currentRect = null;
let currentColor = [255, 255, 255]; 

function preload() {
  img = loadImage("Final.png");
}

function setup() {
  createCanvas(600, 600);
  let label = createElement("p", "Color the environment! You can switch the coloring area by clicking on different body parts of the little monster, switch colors by clicking different buttons, and when you're done, press enter to save the image.");
  label.position(10, 600);
  angleMode(DEGREES);
 rect(0, 200, 600, 200);
  rect(0, 400, 600, 200);
  rect(0, 0, 600, 200);
  let button1 = createButton("Red");
  button1.position(620, 100);
  button1.style("background-color", "red");
  button1.mousePressed(() => (currentColor = [255, 0, 0])); 

  let button2 = createButton("Orange");
  button2.position(620, 150);
  button2.style("background-color", "orange");
  button2.mousePressed(() => (currentColor = [255, 165, 0])); 

  let button3 = createButton("Yellow");
  button3.position(620, 200);
  button3.style("background-color", "yellow");
  button3.mousePressed(() => (currentColor = [255, 255, 0])); 

  let button4 = createButton("Green");
  button4.position(620, 250);
  button4.style("background-color", "green");
  button4.mousePressed(() => (currentColor = [0, 255, 0])); 

  let button5 = createButton("Cyan");
  button5.position(620, 300);
  button5.style("background-color", "cyan");
  button5.mousePressed(() => (currentColor = [0, 255, 255])); 

  let button6 = createButton("Blue");
  button6.position(620, 350);
  button6.style("background-color", "blue");
  button6.mousePressed(() => (currentColor = [0, 0, 255])); 

  let button7 = createButton("Purple");
  button7.position(620, 400);
  button7.style("background-color", "purple");
  button7.mousePressed(() => (currentColor = [128, 0, 128])); 
}


function draw() {
  if (brushActive && mouseIsPressed) {
    drawBrush(currentRect, currentColor, mouseX, mouseY);
  }
  image(img, 0, 0);
  legline();
  headline();
  bodyline();
  head();
  body();
  leg();
}

function drawBrush(rect, color, xPos, yPos) {  
  push();
  noStroke();
  fill(color);
  let constrainedX = constrain(xPos, 0, 600);
  let constrainedY;

  if (rect === "rect1") {
    constrainedY = constrain(yPos, 0, 200);
  } else if (rect === "rect2") {
    constrainedY = constrain(yPos, 200, 400);
  } else if (rect === "rect3") {
    constrainedY = constrain(yPos, 400, 600);
  }

  ellipse(constrainedX, constrainedY, 20, 20);
  pop();
}


function head() {
  push();
  fill(125, 170, 176);
  noStroke();
  beginShape();
  vertex(260, 150);
  vertex(280, 200);
  vertex(320, 200);
  vertex(340, 150);
  endShape();
  pop();

  push();
  fill(101, 171, 119);
  ellipse(300, 10, 20, 60);
  noStroke();
  translate(300, 20);
  rotate(30);
  ellipse(20, 0, 20, 60);
  rotate(40);
  ellipse(20, -20, 20, 70);
  pop();

  push();
  fill(101, 171, 119);
  noStroke();
  translate(300, 20);
  rotate(-30);
  ellipse(-20, 0, 20, 60);
  rotate(-40);
  ellipse(-20, -20, 20, 70);
  pop();

  push();
  fill(125, 170, 176);
  noStroke();
  ellipse(300, 100, 150);
  pop();
  ellipse(270, 90, 20, 40);
  ellipse(330, 90, 20, 40);
  push();
  fill(0);
  ellipse(270, 90, 10);
  ellipse(330, 90, 10);
  pop();
  push();
  translate(300, 150);
  rotate(90);
  ellipse(-10, 0, 20, 60);
  pop();
  beginShape();
  vertex(290, 130);
  vertex(290, 150);
  endShape();
  beginShape();
  vertex(310, 130);
  vertex(310, 150);
  endShape();
}

function headline() {
  push();
  strokeWeight(5);
  beginShape();
  vertex(260, 150);
  vertex(280, 200);
  vertex(320, 200);
  vertex(340, 150);
  endShape();
  ellipse(300, 10, 20, 60);

  push();

  translate(300, 20);
  rotate(30);
  ellipse(20, 0, 20, 60);
  rotate(40);
  ellipse(20, -20, 20, 70);
  pop();

  push();

  translate(300, 20);
  rotate(-30);
  ellipse(-20, 0, 20, 60);
  rotate(-40);
  ellipse(-20, -20, 20, 70);
  pop();

  ellipse(300, 100, 150);
  pop();
}

function body() {
  push();
  noStroke();
  fill(125, 170, 176);
  rect(280, 200, 40, 20);
  rect(220, 220, 160, 180, 20);
  fill(250);
  rect(220, 240, 160, 120);
  fill(125, 170, 176);
  rect(330, 270, 40, 20, 20);
  pop();
}

function bodyline() {
  push();
  strokeWeight(5);
  rect(280, 200, 40, 20);
  rect(220, 220, 160, 180, 20);
  rect(220, 240, 160, 120);
  rect(330, 270, 40, 20, 20);
  pop();
}

function leg() {
  push();
  noStroke();
  fill(125, 170, 176);
  rect(230, 390, 140, 100);
  ellipse(230, 530, 30, 120);
  ellipse(230, 530, 30, 120);
  ellipse(280, 530, 30, 90);
  ellipse(320, 530, 30, 90);
  ellipse(370, 530, 30, 120);
  pop();
}

function legline() {
  push();
  strokeWeight(5);
  rect(230, 390, 140, 100);
  ellipse(230, 530, 30, 120);
  ellipse(230, 530, 30, 120);
  ellipse(280, 530, 30, 90);
  ellipse(320, 530, 30, 90);
  ellipse(370, 530, 30, 120);
  pop();
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <= 200) {
    currentRect = "rect1";
    brushActive = true;
  } else if (mouseX >= 0 && mouseX <= 600 && mouseY >= 200 && mouseY <= 400) {
    currentRect = "rect2";
    brushActive = true;
  } else if (mouseX >= 0 && mouseX <= 600 && mouseY >= 400 && mouseY <= 600) {
    currentRect = "rect3";
    brushActive = true;
  }
}
function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('MyArt!', 'png');
  }
}