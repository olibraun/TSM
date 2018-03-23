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
  // Display cities
  cities.forEach(city => {
    city.show();
  });

  // Display path
  displayPath(indexArray);

  // Calculate and display current distance
  const currentDistance = calcDistance(indexArray);
  distanceText.html(currentDistance);
}