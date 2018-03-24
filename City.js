class City {
  constructor() {
    this.x = random(myGraphicsWidth);
    this.y = random(myGraphicsHeight);
  }

  show() {
    cityGraphics.push();
    cityGraphics.stroke(255);
    cityGraphics.strokeWeight(10);
    cityGraphics.point(this.x, this.y);
    cityGraphics.pop();
  }
}