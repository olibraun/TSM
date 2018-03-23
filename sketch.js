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
  cities.forEach(city => {
    city.show();
  });
  displayPath(indexArray);
  const currentDistance = calcDistance(indexArray);
  distanceText.html(currentDistance);
}