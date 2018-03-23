// Travelling salesman

// Find global variables in variables.js

function setup() {
  createCanvas(400, 400);
  background(51);
  for(let i=0; i < numberOfCities; i++) {
    cities.push(new City());
  }
  // Create distance matrix:
  fillDistanceMatrix();
  // Dom element for current distance
  distanceText = createP();
}

function draw() {
  cities.forEach(city => {
    city.show();
  });
  display(indexArray);
  const currentDistance = calcDistance(indexArray);
  distanceText.html(currentDistance);
}