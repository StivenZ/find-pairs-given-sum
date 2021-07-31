#!/usr/bin/env node
import { findPairsOn, findPairsOn2 } from "./algorithms.js";
import printformat from "./format.js";
import fetchData from "./client.js";

const sum = parseInt(process.argv[2]);
const code = parseInt(process.argv[3]);
const apiLink = "https://mach-eight.uc.r.appspot.com/";

const data = await fetchData(apiLink);

let pairsArray = [];
if (!code) {
  pairsArray = findPairsOn(sum, data);
} else if (code === 1) {
  pairsArray = findPairsOn2(sum, data);
}

if (pairsArray.length === 0) {
  console.log(`No pairs were found whose sum added up to ${sum}`);
} else {
  printformat(pairsArray);
}
