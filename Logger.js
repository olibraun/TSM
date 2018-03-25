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
    diagramGraphics.stroke(255);
    diagramGraphics.strokeWeight(4);
    const l = this.distances.length;
    const spacing = myGraphicsWidth / l;
    const max = l > 0 ? this.distances[0] : 1;
    const scaling = l > 0 ? myGraphicsHeight/max : 0;
    console.log(spacing, scaling);
    for(let i=0; i < l; i++) {
      diagramGraphics.point(i*spacing, this.distances[i]/scaling);
    }
  }
}