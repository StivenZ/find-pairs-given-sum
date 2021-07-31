import { performance } from "perf_hooks";

function findPairsOn2(n, array) {
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

function findPairsOn(n, array) {
  let pairs = [];
  let dict = {};

  let t0 = performance.now();

  for (const player of array) {
    let diff = n - parseInt(player.h_in);

    if (dict[diff]) {
      for (let players of dict[diff]) {
        pairs.push([players, player]);
      }
    }

    if (!dict[player.h_in]) dict[player.h_in] = [];
    dict[player.h_in].push(player);
  }
  let t1 = performance.now();

  console.log("The performance was:", t1 - t0);
  return pairs;
}

export { findPairsOn, findPairsOn2 };
