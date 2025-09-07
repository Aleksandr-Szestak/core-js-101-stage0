/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result;
  if (num % 15 === 0) {
    result = 'FizzBuzz';
  } else if (num % 5 === 0) {
    result = 'Buzz';
  } else if (num % 3 === 0) {
    result = 'Fizz';
  } else {
    result = num;
  }
  return result;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return n === 1 ? 1 : n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;
  for (let i = n1; i <= n2; i += 1) {
    result += i;
  }
  return result;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const arr = [a, b, c].sort((i, j) => j - i);
  return arr[0] < arr[1] + arr[2];
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const crossSegment = (a1, b1, a2, b2) =>
    (b2 >= b1 && b1 > a2) || (b1 >= b2 && b2 > a1);
  if (
    crossSegment(
      rect1.top,
      rect1.top + rect1.height,
      rect2.top,
      rect2.top + rect2.height
    ) &&
    crossSegment(
      rect1.left,
      rect1.left + rect1.width,
      rect2.left,
      rect2.left + rect2.width
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  let xDist;
  let yDist;
  const x1 = circle.center.x;
  const y1 = circle.center.y;
  const x2 = point.x;
  const y2 = point.y;
  if ((x1 < 0 && x2 > 0) || (x1 > 0 && x2 < 0)) {
    xDist = Math.abs(x1) + Math.abs(x2);
  } else {
    xDist =
      Math.max(Math.abs(x1), Math.abs(x2)) -
      Math.min(Math.abs(x1), Math.abs(x2));
  }
  if ((y1 < 0 && y2 > 0) || (y1 > 0 && y2 < 0)) {
    yDist = Math.abs(y1) + Math.abs(y2);
  } else {
    yDist =
      Math.max(Math.abs(y1), Math.abs(y2)) -
      Math.min(Math.abs(y1), Math.abs(y2));
  }
  return Math.sqrt(xDist ** 2 + yDist ** 2) < circle.radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = Array.from(str, () => 0);
  let i;
  let j;
  for (i = 0; i < str.length; i += 1) {
    if (arr[i] === 0) {
      for (j = i + 1; j < str.length; j += 1) {
        if (str[j] === str[i]) {
          arr[i] += 1;
          arr[j] = 1;
        }
      }
    }
  }
  return str[arr.indexOf(0)];
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +String(num).split('').reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let i;
  let digit;
  let summ = 0;
  const ccnString = String(ccn);
  const parityCheck = ccnString.length % 2;
  for (i = 0; i < ccnString.length; i += 1) {
    digit = +ccnString[i];
    if (i % 2 === parityCheck) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    summ += digit;
  }
  return summ % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arr = String(num)
    .split('')
    .map((item) => Number(item));
  const sum = arr.reduce((summ, item) => summ + item, 0);
  let result;
  if (sum < 10) {
    result = sum;
  } else {
    result = getDigitalRoot(sum);
  }
  return result;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
// function isBracketsBalanced(/* str */) {
//   throw new Error('Not implemented');
// }
function isBracketsBalanced(str) {
  //---------------------------------------------
  const testSymb = (symb) => {
    const bracketsConfig = [
      ['[', ']'],
      ['(', ')'],
      ['{', '}'],
      ['<', '>'],
    ];
    let rez = 0;
    for (let i = 0; i < bracketsConfig.length; i += 1) {
      if (symb === bracketsConfig[i][0] && symb === bracketsConfig[i][1]) {
        rez = (i + 1) * 1000;
        break;
      } else if (symb === bracketsConfig[i][0]) {
        rez = i + 1;
        break;
      } else if (symb === bracketsConfig[i][1]) {
        rez = -(i + 1);
        break;
      }
    }
    return rez;
  };
  //---------------------------------------------
  let symb;
  let tSymb;
  const arrPureStr = [];
  let sumo = 0;
  for (let i = 0; i < str.length; i += 1) {
    symb = str[i];
    tSymb = testSymb(symb);
    if (tSymb >= 1000) {
      if (arrPureStr[0] === tSymb) {
        arrPureStr.shift();
        sumo -= tSymb;
      } else {
        arrPureStr.unshift(tSymb);
        sumo += tSymb;
      }
    } else if (tSymb > 0) {
      arrPureStr.unshift(tSymb);
      sumo += tSymb;
    } else if (tSymb < 0 && arrPureStr[0] === Math.abs(tSymb)) {
      arrPureStr.shift();
      sumo += tSymb;
    } else if (tSymb < 0 && arrPureStr[0] !== Math.abs(tSymb)) {
      return false;
    }
  }
  if (arrPureStr.length % 2 !== 0 || sumo !== 0) {
    return false;
  }
  return true;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let i;
  let j;
  const pathesNew = pathes.map((item) => item.split('/'));
  let itemsMin = 1000;
  for (i = 0; i < pathesNew.length; i += 1) {
    if (pathesNew[i].length < itemsMin) {
      itemsMin = pathesNew[i].length;
    }
  }
  let minResult = 1000;
  i = 1;
  while (i < pathesNew.length) {
    j = 0;
    while (j < itemsMin) {
      if (pathesNew[i][j] !== pathesNew[0][j]) {
        break;
      }
      j += 1;
    }
    if (j < minResult) {
      minResult = j;
    }
    i += 1;
  }
  let result = pathesNew[0].slice(0, minResult);
  result.push('');
  result = result.join('/');
  return result;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const res = Array(m1.length)
    .fill()
    .map(() => Array(m1.length).fill(0));
  let j;
  let k;
  for (let i = 0; i < m1.length; i += 1) {
    for (j = 0; j < m1.length; j += 1) {
      for (k = 0; k < m2.length; k += 1) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  return res;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
// function evaluateTicTacToePosition(/* position */) {
//   throw new Error('Not implemented');
// }
function evaluateTicTacToePosition(pos) {
  let i;
  let j;
  let winGame;
  const sumRow = [0, 0, 0];
  const sumCol = [0, 0, 0];

  for (i = 0; i < 3; i += 1) {
    for (j = 0; j < 3; j += 1) {
      if (pos[i][j] === '0') {
        sumRow[i] += 1;
        sumCol[j] += 1;
      } else if (pos[i][j] === 'X') {
        sumRow[i] += 10;
        sumCol[j] += 10;
      }
    }
  }
  if (sumRow.includes(3) || sumCol.includes(3)) {
    winGame = '0';
  } else if (sumRow.includes(30) || sumCol.includes(30)) {
    winGame = 'X';
  } else if (pos[1][1] === '0') {
    if (
      (pos[0][0] === '0' && pos[2][2] === '0') ||
      (pos[2][0] === '0' && pos[0][2] === '0')
    ) {
      winGame = '0';
    }
  } else if (pos[1][1] === 'X') {
    if (
      (pos[0][0] === 'X' && pos[2][2] === 'X') ||
      (pos[2][0] === 'X' && pos[0][2] === 'X')
    ) {
      winGame = 'X';
    }
  }
  return winGame;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
