function shuffleOptimization(currentDistance) {
  const newIndexArray = shuffle(indexArray);
  displayPath(newIndexArray, false);
  const newDistance = calcDistance(newIndexArray);
  if (newDistance < currentDistance) {
    indexArray = newIndexArray;
  }
}

function swapTwoRandomNeighbors(currentDistance) {
  const i = floor(random(indexArray.length));
  const j = floor(random(indexArray.length));
  const newIndexArray = indexArray.slice();
  swap(newIndexArray, i ,j);
  displayPath(newIndexArray, false);
  const newDistance = calcDistance(newIndexArray);
  if (newDistance < currentDistance) {
    indexArray = newIndexArray;
  }
}

function shuffleOrSwap(currentDistance) {
  const optimizers = [shuffleOptimization, swapTwoRandomNeighbors, swapNonNeighbors]
  optimizers.forEach(f => {
    f(currentDistance);
  });
}

function swapNonNeighbors(currentDistance) {
  const newIndexArray = indexArray.slice();
  for(let i=0; i<indexArray.length; i++) {
    for(let j=i+2; j<indexArray.length; j++) {
      swap(newIndexArray, i, j);
      let newDistance = calcDistance(newIndexArray);
      if (newDistance < currentDistance) {
        indexArray = newIndexArray;
      } else {
        swap(newIndexArray, i, j);
      }
      swap(newIndexArray, i+1, j);
      newDistance = calcDistance(newIndexArray);
      if (newDistance < currentDistance) {
        indexArray = newIndexArray;
      } else {
        swap(newIndexArray, i+1, j);
      }
    }
  }
  displayPath(newIndexArray, false);
}