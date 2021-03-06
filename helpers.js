function displayPath(order, highlight) {
  cityGraphics.push();
  if(highlight) {
    cityGraphics.stroke(255, 0, 255);
    cityGraphics.strokeWeight(3);
  } else {
    cityGraphics.stroke(255, 80);
    cityGraphics.strokeWeight(1);
  }
  cityGraphics.noFill();
  cityGraphics.beginShape();
  for(let i=0; i<numberOfCities; i++) {
    const n = order[i];
    cityGraphics.vertex(cities[n].x, cities[n].y);
  }
  cityGraphics.endShape();
  cityGraphics.pop();
}

function fillDistanceMatrix() {
  for (let i = 0; i < numberOfCities; i++) {
    // Check if the respective subarray is already defined
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

function setupCities() {
  for (let i = 0; i < numberOfCities; i++) {
    cities.push(new City());
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}