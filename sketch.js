// Travelling salesman

// Find global variables in variables.js

function setup() {
  // Set up "split canvas"
  createCanvas(2 * myGraphicsWidth, myGraphicsHeight);

  cityGraphics = createGraphics(myGraphicsWidth, myGraphicsHeight);
  diagramGraphics = createGraphics(myGraphicsWidth, myGraphicsHeight);

  cityGraphics.background(51);
  diagramGraphics.background(61);

  // Set up cities
  setupCities();

  // Create distance matrix:
  fillDistanceMatrix();

  // Dom element for current distance
  distanceText = createP();

  // Logger to log and display distance improvements
  logger = new Logger();
}

function draw() {
  //Redraw background
  cityGraphics.background(51);

  // Calculate current distance
  const currentDistance = calcDistance(indexArray);

  // Log current distance if it is improved
  logger.log(currentDistance);

  // "Optimization"
  shuffleOrSwap(currentDistance);

  // Display path
  displayPath(indexArray, true);

  // Display cities
  cities.forEach(city => {
    city.show();
  });

  // Display current distance
  distanceText.html(nf(currentDistance, 0, 2));

  // Draw the two graphics buffers to the canvas
  image(cityGraphics, 0, 0);
  image(diagramGraphics, myGraphicsWidth, 0);
}

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
    return;
  }
}
