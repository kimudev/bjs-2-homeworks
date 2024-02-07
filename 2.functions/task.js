function getArrayParams(...arr) {
  let min = arr[0]; 
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
    sum += arr[i];
  };
  let avg = sum / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
};

// console.log(getArrayParams(1, 2, 3, 4, 5));

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };

  let min = arr[0]; 
  let max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
  };
  let difference = max - min;
  return difference;
};

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    };
  };

  let difference = sumEvenElement - sumOddElement;
  return difference;
};

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    };
  };

  let avg = sumEvenElement / countEvenElement;
  return Number(avg.toFixed(3));
};

// // summElementsWorker
// console.log(summElementsWorker()); // 0
// console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// // differenceMaxMinWorker
// console.log(differenceMaxMinWorker()); // 0
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// // differenceEvenOddWorker
// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// // averageEvenElementsWorker
// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const result = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    result.push(func(...arrOfArr[i]));
  };

  if (Math.max.apply(null, result) > maxWorkerResult) {
    maxWorkerResult = Math.max.apply(null, result); 
  };

  return maxWorkerResult;
};

// const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
// console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
// console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
// console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
// console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72