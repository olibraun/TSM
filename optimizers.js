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
  if(random(1) < 0.5) {
    shuffleOptimization(currentDistance)
  } else {
    swapTwoRandomNeighbors(currentDistance)
  }
}