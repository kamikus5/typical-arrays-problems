
exports.min = function min (array) {
  if (!array) {
    return 0;
  } else if (array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      let swap;
      if (array[k] > array[k + 1]) {
        swap = array[k];
        array[k] = array[k + 1];
        array[k + 1] = swap;
      }
    }
  }
  return array[0];
};

exports.max = function max (array) {
  if (!array) {
    return 0;
  } else if (array.length === 0) {
    return 0;
  }

  for (let i = 0; i <array.length; i++) {
    for (let k = 0; k < array.length; k++) {
      let swap;
      if (array[k] < array[k + 1]) {
        swap = array[k];
        array[k] = array[k + 1];
        array[k + 1] = swap;
      }
    }
  }
  return array[0];
};

exports.avg = function avg (array) {
  if (!array) {
    return 0;
  } else if (array.length === 0) {
    return 0;
  }
  let sum = 0;

  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};
