# Advent-of-Code-22
Repository of solutions to Advent-of-Code-22. Completed in JavaScript. Don't just copy these solutions - have fun learning!

I will be updating this repository with the previous day's solution.

## Set up
- Log in to [Advent of Code](https://adventofcode.com/).
- Install Node (this project uses v16.16.0). See the official [documentation](https://nodejs.dev/en/learn/how-to-install-nodejs/) for more details.
- Create the repository.
- Create a utilities file (for storing functions that may be useful in multiple puzzles).
- Run `npm init -y` to create a package.json file.
- Add `"type": "module"` to package.json.
- Run the following code in the terminal to create multiple directories for the individual days:
```
  for i in {1..25}; do mkdir Day-$i; done
```
```
  for i in {1..25}; do touch Day-$i/Solution$i.js; done
```
```
  for i in {1..25}; touch Day-$i/input$i.js; done
```

## Solving the puzzles
- Copy the day's puzzle input from Advent of Code into the input file.
- Save as a variable and export as a multiline string, e.g.:
```javascript
  export const input1 = `6672, 
  ....`;
```
- Import the input at the top of the solution file:
```javascript
  import { input1 as input } from 'input1.js'; 
```
- Solve the first part of the puzzle. To see the results of any `console.log()`, run `node Solution1.js` in the terminal from the Day-1 directory.
- Input your answer.
- Repeat with the second part of the puzzle. You may want to split your solutions into two separate files for convenience.
- In the above, if you have a function that may be useful in different puzzles (e.g., a sort function) you can add it to utilities and export/import them:
```javascript
  export const someFunction = (parameters) => {...
  } 
```
```javascript
  import { someFunction } from '../utilities.js';
```
