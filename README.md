# findPairs

findPairs is a JavaScript repo for finding pairs of values which sum up to a given value. It uses three different approaches:

1. "Brute-force" algorithm with O(n^2) time complexity.
2. Enhanced "brute-force" by using 2 pointers with O(nlog(n)).
3. Efficient solution using hashing (JavaScript inner Objects) with O(n)

## Installation

Clone this repository

```bash
git clon
```

Use the package manager [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) to install findPairs.

```bash
npm install
```

## Usage

```javascript
./src/index.js number option
```

where _number_ is the sum parameter passed to the function to match the data. There is an optional parameter _option_ to choose the algorithm:

- _option_ = 1
  Checks O(n^2) time complexity.
- _option_ = 2
  Checks O(nlog(n)) time complexity.

```JavaScript
# Checks O(n)
./src/index.js 139

# Checks O(n^2)
./src/index.js 139 1

# Checks O(nlog(n))
./src/index.js 139 2
```
