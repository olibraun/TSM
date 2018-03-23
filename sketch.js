// Travelling salesman

let cities = [];
let numberOfCities = 5;

function setup() {
  createCanvas(400, 400);
  background(51);
  for(let i=0; i< numberOfCities; i++) {
    cities.push(new City());
  }
}

function draw() {
  cities.forEach(city => {
    city.show();
  });
}

class City {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }

  show() {
    push();
    stroke(255);
    strokeWeight(8);
    point(this.x, this.y);
    pop();
  }
}