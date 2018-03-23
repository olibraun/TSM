class City {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  show() {
    push();
    stroke(255);
    strokeWeight(10);
    point(this.x, this.y);
    pop();
  }
}