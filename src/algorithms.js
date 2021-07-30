import { performance } from "perf_hooks";

function findPairs(n, array) {
  let i, j;
  let pairs = [];

  const t0 = performance.now();
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (parseInt(array[i].h_in) + parseInt(array[j].h_in) === n) {
        pairs.push([array[i], array[j]]);
        continue;
      }
    }
  }
  const t1 = performance.now();
  console.log("Performance was:", t1 - t0);
  return pairs;
}

function findPairs2(n, array) {
  let i = 0;
  let j = array.length - 1;
  let pairs = [];

  const t0 = performance.now();
  array.sort((a, b) => {
    return parseInt(a.h_in) - parseInt(b.h_in);
  });

  while (i < j) {
    if (parseInt(array[i].h_in) + parseInt(array[j].h_in) === n) {
      pairs.push(array[i], array[j]);
      checkRedundant(i, j, array);
    }
    if (parseInt(array[i].h_in) + parseInt(array[j].h_in) > n) {
      j--;
    } else {
      i++;
    }
  }
  const t1 = performance.now();
  console.log("Performance was:", t1 - t0);
  return pairs;
}

function findPairs3(n, array) {
  let pairs = [];
  let dict = {};

  let t0 = performance.now();
  for (const player of array) {
    if (!dict[player.h_in]) {
      dict[player.h_in] = [player];
    } else {
      dict[player.h_in] = [...dict[player.h_in], player];
    }
  }

  for (const player of array) {
    let diff = n - parseInt(player.h_in);
    if (dict[diff]) {
      for (let players of dict[diff]) {
        pairs.push([players, player]);
      }
    }
  }
  let t1 = performance.now();

  console.log("The performance was:", t1 - t0);
  let pairSet = new Set(pairs);
  return pairs;
}

function checkRedundant(i, j, array) {
  let k = 1;
  while (array[i + k].h_in === array[i]) {
    pairs.push(array[i + k], array[j]);
    k++;
  }
  return;
}

export { findPairs, findPairs2, findPairs3 };
