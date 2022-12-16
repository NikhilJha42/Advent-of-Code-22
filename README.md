# Advent-of-Code-22
Repository of solutions to Advent-of-Code-22. Completed in JavaScript. Don't just copy these solutions - have fun learning!

Note: Day 11 and 13 incomplete.

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
  for i in {1..25}; do touch Day-$i/Solution$i-a.js; done
```
```
  for i in {1..25}; do touch Day-$i/Solution$i-b.js; done
```
```
  for i in {1..25}; touch Day-$i/input$i.js; done
```
(note: Advent of Code labels the two parts as Parts One and Two - this repository relabels these as Parts A and B for preference.)
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
- Repeat with the second part of the puzzle. 
- Depending on the complexity of the solutions, you may wish to define functions and classes in separate files and then export them to separate solution files:
```javascript
// classes.js
export class Class1 {...
}
export class Class2 {...
}
```
```javascript
// Solution.js
import { Class1, Class2 } from "./classes.js";
```
- If you have a function that may be useful in different puzzles (e.g., a sort function) you can add it to utilities and export/import them:
```javascript
  export const sortFunction = (parameters) => {...
  } 
```
```javascript
  import { sortFunction } from '../utilities.js';
```
- If you want to log some output to a test file (see Day-14, for example) you can run the bash terminal command:
```
node.exe SolutionN-a.js > test.txt
```