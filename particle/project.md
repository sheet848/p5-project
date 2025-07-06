Perfect! 🎆 A **colorful particle system with attraction/repulsion** is a fun and interactive project where particles move around and either get *pulled toward* or *pushed away* from the mouse depending on mode.

---

## 🌌 Project Overview:

We’ll build a basic particle system where:

* Each **particle** has position, velocity, and color.
* They move freely but interact with your mouse:

  * **Attract Mode**: Move toward the mouse
  * **Repel Mode**: Move away from the mouse
* You can **toggle modes** by pressing a key.

---

### ✅ Step 1: Basic Colorful Particle System with Attract/Repel

Paste this into the [p5.js editor](https://editor.p5js.org):

```js
let particles = [];
let mode = 'attract'; // or 'repel'

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20, 20, 30, 100); // semi-transparent for trail effect

  for (let p of particles) {
    p.update();
    p.show();
  }

  fill(255);
  noStroke();
  textSize(16);
  text(`Mode: ${mode} (press 'a' to toggle)`, 10, height - 10);
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    mode = (mode === 'attract') ? 'repel' : 'attract';
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(1, 2));
    this.acc = createVector(0, 0);
    this.color = color(random(255), random(255), random(255));
    this.maxSpeed = 5;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    let distance = dir.mag();
    distance = constrain(distance, 10, 100); // avoid extreme forces
    dir.normalize();

    let strength = 100 / (distance * distance); // inverse square law
    if (mode === 'repel') dir.mult(-strength);
    else dir.mult(strength);

    this.applyForce(dir);

    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0); // reset acceleration

    // Wrap around edges
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
}
```
---

### Preview
![image](https://github.com/user-attachments/assets/b7ebe67f-0f62-4a11-ae8a-2a73e66d02ff)

---

### 🎮 Controls:

| Action      | Key                                      |
| ----------- | ---------------------------------------- |
| Toggle mode | Press `a`                                |
| Move mouse  | Interacts with particles (attract/repel) |

---

## 🧠 Concepts Covered:

| Concept                | How It's Used                                           |
| ---------------------- | ------------------------------------------------------- |
| `p5.Vector`            | Particle physics (position, velocity, acceleration)     |
| Force = Inverse-square | `strength = 1 / d²` (simulates gravity/electric fields) |
| `random()` & `color()` | Gives particles rainbow appearance                      |
| Mouse interactivity    | Particles react to mouse position dynamically           |
| Edge wrapping          | Particles reappear on the other side of the canvas      |

---

## 🌈 Want to Extend This?

Let me know if you want to:

* Add **mouse clicks** that explode particles
* Add **gravity wells** or multiple attractors
* Turn it into a **sound visualizer**
* Draw **connection lines** between close particles
* Add **friction**, **mass**, or other forces

This project is flexible for physics, visuals, and interaction! Ready to take it to the next level?
