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
    diagramGraphics.background(51);
    diagramGraphics.push();
    diagramGraphics.stroke(255);
    diagramGraphics.strokeWeight(10);
    const l = this.distances.length;
    const spacing = myGraphicsWidth / l;
    const max = l > 0 ? this.distances[0] : 1;
    const scaling = l > 0 ? myGraphicsHeight/max : 0;
    for(let i=0; i < l; i++) {
      diagramGraphics.point(i*spacing, myGraphicsHeight - this.distances[i]*scaling);
    }
    diagramGraphics.pop();
  }
}