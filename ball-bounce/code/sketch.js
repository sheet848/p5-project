let x = 100;
let y = 100;
let diameter = 100;
let speedX = 5;
let speedY = 5;

function setup() {
  createCanvas(750, 500);
}

function draw() {
  background(100);

  // Draw the ball
  fill(0, 150, 350);
  ellipse(x, y, diameter, diameter);

  // Move the ball
  x += speedX;
  y += speedY;

  // Bounce off edges
  if (x < diameter / 2 || x > width - diameter / 2) {
    speedX *= -1;
  }
  if (y < diameter / 2 || y > height - diameter / 2) {
    speedY *= -1;
  }
}
