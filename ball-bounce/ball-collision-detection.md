Great! Let’s level up and make the balls **bounce off each other** in addition to bouncing off walls.

---

### ⚠️ Note:

This requires **collision detection** and a basic **response** — we’ll use **circle-circle collision** and reverse the velocity upon contact for a simple effect.

This is a **simplified physics simulation** (not 100% realistic, but visually fun and beginner-friendly).

---

### ✅ Final Code: Balls Bounce Off Each Other + Walls

```js
let balls = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 10; i++) {
    balls.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      diameter: random(20, 40),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      color: [random(255), random(255), random(255)]
    });
  }
}

function draw() {
  background(240);

  for (let i = 0; i < balls.length; i++) {
    let b1 = balls[i];

    // Move ball
    b1.x += b1.speedX;
    b1.y += b1.speedY;

    let r1 = b1.diameter / 2;

    // Bounce off walls
    if (b1.x < r1 || b1.x > width - r1) {
      b1.speedX *= -1;
    }
    if (b1.y < r1 || b1.y > height - r1) {
      b1.speedY *= -1;
    }

    // Check for collisions with other balls
    for (let j = i + 1; j < balls.length; j++) {
      let b2 = balls[j];
      let r2 = b2.diameter / 2;
      let dx = b2.x - b1.x;
      let dy = b2.y - b1.y;
      let distance = sqrt(dx * dx + dy * dy);

      if (distance < r1 + r2) {
        // Simple elastic bounce: swap velocities
        let tempX = b1.speedX;
        let tempY = b1.speedY;
        b1.speedX = b2.speedX;
        b1.speedY = b2.speedY;
        b2.speedX = tempX;
        b2.speedY = tempY;

        // Push them apart slightly to avoid sticking
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
    ellipse(ball.x, ball.y, ball.diameter);
  }
}
```

---

### 🧠 What’s Happening:

#### ✅ Collision Detection:

```js
let distance = sqrt(dx * dx + dy * dy);
if (distance < r1 + r2)
```

* If the distance between two ball centers is less than the sum of their radii, they’re colliding.

#### ✅ Collision Response:

* We **swap velocities** to mimic bouncing.
* Then **separate** them slightly to avoid “sticking together”.

---

### ⚙️ Limitations:

This is a **simple approximation**:

* No mass or acceleration
* Not perfectly realistic physics (e.g., doesn’t use vector projection or conservation of momentum)

But it's:

* Fast
* Clean
* Fun to play with
