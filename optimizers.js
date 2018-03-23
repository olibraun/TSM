function shuffleOptimization(currentDistance) {
  const newIndexArray = shuffle(indexArray);
  displayPath(newIndexArray, false);
  const newDistance = calcDistance(newIndexArray);
  if (newDistance < currentDistance) {
    indexArray = newIndexArray;
  }
}