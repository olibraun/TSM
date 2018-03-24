let myGraphicsWidth = 400;
let myGraphicsHeight = 400;

let cityGraphics;
let diagramGraphics;

let cities = [];

let numberOfCities = 20;

// Create an index array to be [0..numberOfCities-1]:
// [...Array(n).keys()] creates the array [0, 1, ..., n-1]
let indexArray = [...Array(numberOfCities).keys()];

let distanceMatrix = [];

let distanceText;

let recordDistance = Infinity;

let logger;