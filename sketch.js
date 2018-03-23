// Travelling salesman

let cities = [];
let numberOfCities = 5;
// Create an index array to be [0..numberOfCities-1]:
// [...Array(n).keys()] creates the array [0, 1, ..., n-1]
let indexArray = [...Array(numberOfCities).keys()];

function setup() {
  createCanvas(400, 400);
  background(51);
  for(let i=0; i < numberOfCities; i++) {
    cities.push(new City());
  }
}

function draw() {
  cities.forEach(city => {
    city.show();
  });
  display(indexArray);
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