let stepCount = 0

function setup() {
  createCanvas(720, 800);
}

function draw() {
  startScreen();  
}

function drawCat(stepCount) {
  
  if (stepCount >= 1) {
    fill("lightgrey");
    //body
    ellipse(300, 250, 130, 150);
  }
  if (stepCount >= 2) {
    //head
    ellipse(300, 150, 100, 100);
  }
  if (stepCount >= 3) {
    //left ear
    triangle(360, 85, 320, 105, 345, 135);
    ellipse(300, 150, 100, 100);
  }
  if (stepCount >= 4) {
    //right ear
    triangle(240, 85, 280, 105, 255, 135);
    ellipse(300, 150, 100, 100);
  }
  
  if (stepCount >= 5) {
    //eye 1
    fill("black")
    ellipse(285, 130, 10, 10);
  }
  if (stepCount >= 6) {
    //eye 2
    ellipse(315, 130, 10, 10);
  }
  if (stepCount >= 7) {
    //nose
    triangle(290, 145, 310, 145, 300, 155)
  }
  if (stepCount >= 8) {
    //leg 1
    fill("lightgrey")
    beginShape();
    curveVertex(290, 260);
    curveVertex(290, 260);
    curveVertex(290, 332);
    curveVertex(260, 332);
    curveVertex(260, 260);
    curveVertex(260, 260);
    strokeWeight(1);
    endShape();
  }
  if (stepCount >= 9) {
    //leg 2
    fill("lightgrey")
    beginShape();
    curveVertex(340, 260);
    curveVertex(340, 260);
    curveVertex(340, 332);
    curveVertex(310, 332);
    curveVertex(310, 260);
    curveVertex(310, 260);
    strokeWeight(1);
    endShape();
  }
}

// Function to set up the start screen
function startScreen() {
  background(127);
  background("pink");
  
  // Title
  strokeWeight(1)
  stroke("black")
  textSize(32);
  fill(190, 45, 245)
  text('DRAWING 101', 300, 30);
  textAlign(CENTER, CENTER);
  
  // Draw next step button
  fill(245, 45, 200, 127);
  ellipse(100, 300, 75, 75);
  textSize(20);
  fill(190, 45, 245)
  text('STEP', 100, 300)
  
  // Draw the cat
  drawCat(stepCount)
}


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 100, 300);
  if (d < 37.5) {
    // Run function for next step of drawing
    stepCount += 1
  }
}