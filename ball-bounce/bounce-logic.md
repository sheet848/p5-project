Great! Let's get you started with a simple **p5.js** project. Here's a classic beginner-friendly one: **"Bouncing Ball Animation."**

### 🎯 Project Idea: Bouncing Ball

The ball moves across the canvas, and when it hits the edge, it bounces back.

---

### ✅ Code

```js
let x = 100;
let y = 100;
let diameter = 50;
let speedX = 3;
let speedY = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Draw the ball
  fill(0, 150, 255);
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
```

---

### 🔍 Concepts Covered:

* `setup()` & `draw()` basics
* Canvas drawing (`ellipse`, `background`, `fill`)
* Animation loop
* Conditional logic for bouncing

---

### 🧠 Code in Question:

```js
if (x < diameter / 2 || x > width - diameter / 2) {
  speedX *= -1;
}
if (y < diameter / 2 || y > height - diameter / 2) {
  speedY *= -1;
}
```

---

### Preview

![image](https://github.com/user-attachments/assets/afd23fcd-07f3-4a20-aa59-3ea170e622a1)

---

### 📦 Variables Recap:

* `x`, `y`: position of the ball's center.
* `diameter`: size of the ball (circle).
* `width`, `height`: size of the canvas.
* `speedX`, `speedY`: movement in each direction (velocity).

---

### 🧱 Canvas Coordinate System:

* `(0,0)` is the **top-left** corner.
* `x` increases → right, `y` increases ↓ down.
* `ellipse(x, y, diameter, diameter)` draws a circle **centered** at `(x, y)`.

---

### 🔁 How Bounce Logic Works:

#### 1. **Left and Right Edges (Horizontal Bounce):**

```js
if (x < diameter / 2 || x > width - diameter / 2)
```

* `x < diameter / 2`: left edge collision.

  * The ball’s **left side** hits canvas edge.
* `x > width - diameter / 2`: right edge collision.

  * The ball’s **right side** hits canvas edge.

We use `diameter / 2` because the `x` coordinate is at the **center** of the circle — we need to account for the ball’s radius to avoid it going halfway offscreen.

```js
speedX *= -1;
```

This **reverses the direction** (flips the sign):

* If ball was moving right (`speedX = 3`), it now moves left (`speedX = -3`)
* This creates a **bounce** effect.

#### 2. **Top and Bottom Edges (Vertical Bounce):**

Same logic applies for `y` and `height`:

```js
if (y < diameter / 2 || y > height - diameter / 2)
```

---

### 💡 Visual Example:

Let’s say:

* Canvas is 600×400.
* Ball center is at `x = 10`, `diameter = 50`.
* So ball radius is `25`, and `10 < 25` → hit left wall → flip `speedX`.

---

### 🔁 Summary:

| Edge   | Condition                   | What it means                   |
| ------ | --------------------------- | ------------------------------- |
| Left   | `x < diameter / 2`          | Ball's left side hit wall       |
| Right  | `x > width - diameter / 2`  | Ball's right side hit wall      |
| Top    | `y < diameter / 2`          | Ball's top hit canvas top       |
| Bottom | `y > height - diameter / 2` | Ball's bottom hit canvas bottom |
| Action | `speedX` or `speedY` \*= -1 | Flip direction = bounce         |
