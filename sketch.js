// Travelling salesman

let cities = [];
let numberOfCities = 5;
// Create an index array to be [0..numberOfCities-1]:
// [...Array(n).keys()] creates the array [0, 1, ..., n-1]
let indexArray = [...Array(numberOfCities).keys()];

let distanceMatrix = [];

let distanceText;

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

class City {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  show() {
    push();
    stroke(255);
    strokeWeight(10);
    point(this.x, this.y);
    pop();
  }
}

function display(order) {
  push();
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for(let i=0; i<numberOfCities; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();
  pop();
}

function fillDistanceMatrix() {
  for (let i = 0; i < numberOfCities; i++) {
    // Check if the respective subarray is alredy defined
    if (!distanceMatrix[i]) {
      distanceMatrix[i] = [];
    }
    for (let j = 0; j < numberOfCities; j++) {
      const x1 = cities[i].x;
      const y1 = cities[i].y;
      const x2 = cities[j].x;
      const y2 = cities[j].y;
      const dist = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      distanceMatrix[i][j] = dist;
    }
  }
}

function calcDistance(order) {
  let sum = 0;
  for(let i=0; i<order.length-1; i++) {
    const m = order[i];
    const n = order[i+1];
    sum += distanceMatrix[m][n];
  }
  return sum;
}