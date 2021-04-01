'use strict'

let main = document.querySelector('main'),
    input = document.querySelector('input'),
    response = document.querySelector('h2'),
    button = document.querySelector('button'),
    show_result = document.getElementById('result'),
    section = document.querySelector('section');

input.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click()
  }
})

function ValidateInput() {
  if (input.value == 'link') {
    window.open('https://github.com/helloworld-html/Prime-Factorization-Calculator')
  }
  let number = parseFloat(input.value);
  show_result.innerHTML = '';
  document.querySelector('i').style.display = 'none';
  document.querySelector('main > div').style.display = 'none';

  try {
    if (number < 0) throw 'Please enter a positive number';
    if (number == 0) throw 'Please enter a number that is different from 0';
    if (isNaN(input.value) || input.value == '') throw 'Please enter a number';
    if (input.value.includes('.')) throw 'Please enter an integer';
    if (!Number.isSafeInteger(number)) throw `This number exceeds the <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER target=_blank style=color:coral;cursor:pointer rel=noopener> MAX_SAFE_INTEGER </a> standard`
  } catch (error) {
    response.innerHTML = error;
    return false
  }

  document.querySelector('main > div').style.display = 'block';
  document.querySelector('i').style.display = 'block';

  const t0 = performance.now();
  Factorize(input.value);
  const t1 = performance.now();
  document.querySelector('i').innerHTML = `The results were found in ${Math.round((t1 - t0 + Number.EPSILON) * 1000) / 1000} milliseconds!`;
}


function Factorize(dividend) {
  let divisor = 2;
  let final_result = '', final_result_2 = '';
  let count_calculation = 0;
  while (dividend > 1) {
    let exponent = 0;
    while (dividend % divisor == 0) {
      const result = dividend / divisor;
      count_calculation ++;
      final_result_2 += `Calculation (${count_calculation}): <br> <i style=color:#55dda4>${dividend} \u00f7 ${divisor}</i> <br><br>`;
      dividend = result;
      exponent ++
    }
    if (exponent >= 1) {
      final_result += `${divisor}<sup style=color:#55dda4>${exponent}</sup><br>`
    }
    divisor ++;
  }

  if (divisor - 1 == input.value) {
    response.innerHTML = `<a style=color:#4dc3ff;text-decoration:none>${input.value}</a> is a prime number`;
    document.getElementById('toogle').style.display = 'none'
  } else {
    response.innerHTML = `Prime factor decomposition for <a style=color:#4dc3ff;text-decoration:none>${input.value}</a>:`;
    show_result.innerHTML = final_result;
    show_result.style.color = '#ff8f66';
    document.getElementById('toogle').style.display = 'block'
  }
  document.getElementById('toogle').addEventListener('click', function() {
    show_result.innerHTML = final_result_2
  })

  localStorage.setItem(new Date(), input.value)
}


function Storage() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values.push(localStorage.getItem(keys[i]))
  }
  values.sort((a, b) => b - a);
  document.querySelector('h3').innerHTML = `The following numbers were previously prime factorized on your device: </br></br><i style=color:#4dc3ff;user-select:text>${values.join(', ')} </i>`;
  if (keys.length == 0) {
    document.getElementById("link1").style.display = 'none'
  }
}
