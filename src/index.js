#!/usr/bin/env node
import Axios from "axios";
import { findPairs, findPairs2, findPairs3 } from "./algorithms.js";
import printformat from "./format.js";

const sum = parseInt(process.argv[2]);
const code = parseInt(process.argv[3]);
const apiLink = "https://mach-eight.uc.r.appspot.com/";

async function fetchData() {
  try {
    const response = await Axios.get(apiLink);
    return response.data["values"];
  } catch (error) {
    console.log(error);
  }
}

// const data = await fetchData();
let data = [
  { first_name: "Alex", h_in: "77", h_meters: "1.96", last_name: "Acker" },
  { first_name: "Hassan", h_in: "77", h_meters: "1.96", last_name: "Adams" },
  { first_name: "Arron", h_in: "78", h_meters: "1.97", last_name: "Afflalo" },
  { first_name: "Maurice", h_in: "79", h_meters: "1.98", last_name: "Ager" },
  { first_name: "Alexis", h_in: "79", h_meters: "1.98", last_name: "Ajinca" },
];

let pairsArray = [];
if (!code) {
  pairsArray = findPairs(sum, data);
} else if (code === 1) {
  pairsArray = findPairs2(sum, data);
} else if (code === 2) {
  pairsArray = findPairs3(sum, data);
}

printformat(pairsArray);
