class Logger {
  constructor() {
    this.distances = [];
  }

  log(dist) {
    if(dist < recordDistance) {
      this.distances.push(dist);
      recordDistance = dist;
    }
  }

  display() {
    const xoffset = 10;
    const yoffset = 10;
    diagramGraphics.background(51);
    diagramGraphics.push();
    diagramGraphics.stroke(255);
    diagramGraphics.strokeWeight(10);
    const l = this.distances.length;
    const spacing = (myGraphicsWidth - 2*xoffset) / l;
    const max = l > 0 ? this.distances[0] : 1;
    const scaling = l > 0 ? (myGraphicsHeight - 2*yoffset)/max : 0;
    for(let i=0; i < l; i++) {
      diagramGraphics.point(xoffset + i*spacing, yoffset + myGraphicsHeight - this.distances[i]*scaling);
    }
    diagramGraphics.pop();
  }
}