Awesome! Let’s upgrade the code to support **multiple bouncing balls**.

---

### 🎯 Goal:

Instead of just one ball, we’ll create an **array of balls**, each with:

* Position
* Speed
* Diameter
* Color (optional)

---

### ✅ Final Code (Multiple Bouncing Balls)

```js
let balls = [];

function setup() {
  createCanvas(600, 400);

  // Create 10 balls with random properties
  for (let i = 0; i < 10; i++) {
    balls.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      diameter: random(20, 50),
      speedX: random(-3, 3),
      speedY: random(-3, 3),
      color: [random(255), random(255), random(255)]
    });
  }
}

function draw() {
  background(220);

  for (let ball of balls) {
    // Draw the ball
    fill(ball.color);
    ellipse(ball.x, ball.y, ball.diameter);

    // Move the ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    let r = ball.diameter / 2;

    // Bounce off horizontal edges
    if (ball.x < r || ball.x > width - r) {
      ball.speedX *= -1;
    }

    // Bounce off vertical edges
    if (ball.y < r || ball.y > height - r) {
      ball.speedY *= -1;
    }
  }
}
```

---

### Preview

![image](https://github.com/user-attachments/assets/226ae7d0-ad59-40a0-b809-0cd3448dc91c)

---

### 🔍 What’s New:

* `balls[]`: Array of ball objects.
* `random()` used to create varied:

  * Positions
  * Sizes
  * Speeds
  * Colors
* Loop through each ball in `draw()` and apply motion + bounce logic.

---

### 🧠 Concepts Introduced:

* Arrays and objects in p5.js
* `random()` for variation
* For-of loop
