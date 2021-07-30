function printformat(array) {
  for (let pairs of array) {
    console.log(
      `- ${pairs[0].first_name} ${pairs[0].last_name}\t\t${pairs[1].first_name} ${pairs[1].last_name}`
    );
  }
}

export default printformat;
