#!/usr/bin/env node
import Axios from "axios";
import { findPairs, findPairs2, findPairs3 } from "./algorithms.js";

const sum = parseInt(process.argv[2]);
const apiLink = "https://mach-eight.uc.r.appspot.com/";

async function fetchData() {
  try {
    const response = await Axios.get(apiLink);
    return response.data["values"];
  } catch (error) {
    console.log(error);
  }
}

const data = await fetchData();
console.log(findPairs3(sum, data));
