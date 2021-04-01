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

After you installed the package, place this in your code:
```js
const module = require('prime-factorization');
```

- **Factorize a number**

There are different ways to factorize (19386 as an example):

```js
const firstMethod = module.Factorize(19386, 'asArray'); //result in array
const secondMethod = module.Factorize(19386, 'asArrayExp'); //exponentiates same numbers
const thirdMethod = module.Factorize(19386, 'asObject'); //shows all calculations

console.log(firstMethod) //returns [2, 3, 3, 3, 359]
console.log(secondMethod) //returns [2, 27, 359]
console.log(thirdMethod) //returns { 'Calculation 0': '1100 ÷ 2', 'Calculation 1': '550 ÷ 2', 'Calculation 2': '275 ÷ 5', 'Calculation 3': '55 ÷ 5', 'Calculation 4': '11 ÷ 11' }
```


- **Check if number is prime**

```js
const myVar = module.IsPrime(111) //will return either true or false
console.log(myVar) //returns true
```

***Please report any bugs or errors, thanks for your contribution!***
