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
}

function draw() {
  background(51);
  // Display cities
  cities.forEach(city => {
    city.show();
  });

  // Calculate current distance
  const currentDistance = calcDistance(indexArray);

  // "Optimization"
  shuffleOrSwap(currentDistance);

  // Display path
  displayPath(indexArray, true);

  // Display current distance
  distanceText.html(currentDistance);
}
