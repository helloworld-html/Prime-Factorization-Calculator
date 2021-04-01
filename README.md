# Prime Factorization Calculator
*This calculator allows you to calculate prime factor decomposition of a positive integer and detects if the number is prime.*

## Web Interface
https://helloworld-html.github.io/Prime-Factorization-Calculator/

**The calculator provides results in two different ways:**
- **Default:** only the divisors are showed.</br>
  **`n`<sup>`a`</sup>** </br>
  
  **`n`<sup>`a`</sup>** </br>
   
  **`n`<sup>`a`</sup>** ... </br>
  
- **Advanced:** All calculations are showed. The first number in each `Calculation()` is the result of the division of the two numbers in the previous calculation *(for example here: `c` = `a` &#247; `b` and `e` = `c` &#247; `d`).*

  **`Calculation (1):`** </br>
  **`a` &#247; `b`** </br>
  
  **`Calculation (2):`** </br>
  **`c` &#247; `d`** </br>
  
  **`Calculation (3):`** </br>
  **`e` &#247; `f`** ... </br> 
  
  **You can access all the numbers you previously prime factorized by clicking on *Browse your history* (based on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"> local storage</a>)** </br>
  
## Node.js Interface
https://www.npmjs.com/package/prime-factorization

You can also import the calculator in your code with Node.js and access it with a function:
```js
const module = require("prime-factorization");
 
let myVariable = module.factorize(19386);
console.log(myVariable); //returns 2 * 3 * 3 * 3 * 359
```
You can also modify the divisor (default is 2) as the following,

```js
module.factorize(19386, 4); //returns 6 * 9 * 359
```

***Please report any bugs or errors, thanks for your contribution!***
