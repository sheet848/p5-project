Nice! Let's now make the canvas interactive so that every time you **click**, a **new ball** is added at the mouse position with random speed, size, and color.

---

### ✅ Updated Code: Click to Add Balls

```js
let balls = [];

function setup() {
  createCanvas(600, 400);

  // Create initial balls
  for (let i = 0; i < 5; i++) {
    addBall(random(width), random(height));
  }
}

function draw() {
  background(240);

  // Move and handle collisions
  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];

    // Move ball
    b1.x += b1.speedX;
    b1.y += b1.speedY;

    let r1 = b1.diameter / 2;

    // Bounce off walls
    if (b1.x < r1 || b1.x > width - r1) b1.speedX *= -1;
    if (b1.y < r1 || b1.y > height - r1) b1.speedY *= -1;

    // Check collisions with other balls
    for (let j = i + 1; j < balls.length; j++) {
      let b2 = balls[j];
      let r2 = b2.diameter / 2;

      let dx = b2.x - b1.x;
      let dy = b2.y - b1.y;
      let distance = sqrt(dx * dx + dy * dy);

      if (distance < r1 + r2) {
        // Swap velocities
        [b1.speedX, b2.speedX] = [b2.speedX, b1.speedX];
        [b1.speedY, b2.speedY] = [b2.speedY, b1.speedY];

        // Push apart
        let overlap = (r1 + r2 - distance) / 2;
        let angle = atan2(dy, dx);
        let offsetX = cos(angle) * overlap;
        let offsetY = sin(angle) * overlap;

        b1.x -= offsetX;
        b1.y -= offsetY;
        b2.x += offsetX;
        b2.y += offsetY;
      }
    }
  }

  // Draw all balls
  for (let ball of balls) {
    fill(ball.color);
    noStroke();
    ellipse(ball.x, ball.y, ball.diameter);
  }
}

function mousePressed() {
  // Add a new ball where you click
  addBall(mouseX, mouseY);
}

function addBall(x, y) {
  balls.push({
    x: x,
    y: y,
    diameter: random(20, 40),
    speedX: random(-2, 2),
    speedY: random(-2, 2),
    color: [random(255), random(255), random(255)]
  });
}
```

---

### 🖱 How it Works:

* `mousePressed()` → called automatically by p5.js when you click the canvas.
* `addBall(x, y)` → creates a new ball with random properties at the click location.
* `balls.push(...)` → adds the new ball to the global array.

---

### 🧪 Try:

* Clicking all over the canvas
* Watching how balls interact
* Clicking fast and spawning a "ball storm"
