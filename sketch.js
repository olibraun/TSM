// Travelling salesman

// Find global variables in variables.js

function setup() {
  createCanvas(400, 400);
  background(51);

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
  background(51);
  // Display cities
  cities.forEach(city => {
    city.show();
  });

  // Calculate current distance
  const currentDistance = calcDistance(indexArray);

  // Log current distance if it is improved
  logger.log(currentDistance);

  // "Optimization"
  shuffleOrSwap(currentDistance);

  // Display path
  displayPath(indexArray, true);

  // Display current distance
  distanceText.html(nf(currentDistance, 0, 2));
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
