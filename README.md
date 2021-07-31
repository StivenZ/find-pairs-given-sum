# findPairs

findPairs is a JavaScript repository for finding pairs of values which sum up to a given value. It uses two different approaches:

- "Brute-force" algorithm with O(n^2) time complexity.
- Efficient solution using hashing (JavaScript inner Objects) with O(n)

## Installation

Clone this repository

```bash
git clone https://github.com/StivenZ/find-pairs-given-sum.git
```

Use the package manager [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) to install findPairs.

```bash
npm install
```

## Usage

```bash
npm start number [option]
```

where _number_ is the sum parameter passed to the function to match the data. There is an optional parameter _option_ to choose the algorithm:

- _option_ = 1
  Checks O(n^2) time complexity.
- _option_ = _no option passed_
  checks by default O(n) time complexity.

Execute without optional parameters to see the best time algorithm O(n) using inner JavaScript hash.

```bash
# Checks O(n)
npm start 139

# Checks O(n^2)
npm start 139 1
```

## Discussion

The algorithm to find the first occurrence of a pair of data which sum adds up to a given number can be solved, in deed, in **O(n)**.
A new issue arrives when it's strictly necessary to output every occurrence of this combinations.

1. The best scenario happens when data to combine is heterogeneously distributed and a combination seldom appears. In such case **O(n)** can actually be achieved.

2. The worst scenario takes shape when data is homogeneous. The more possible combinations, the more the algorithm will take to loop over it to print/output every single pair. This worst case scenario is **O(n^2)**

3. The trivial solution will always be **O(n^2)** for either homogeneous or heterogeneously distributed data.

## Testing

To run all test cases execute the command:

```bash
npm run test
```
