function getArrayParams(...arr) {

    let min = Infinity;
    let max = -Infinity;
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      max = Math.max(max, arr[i]);
      min = Math.min(min, arr[i]);
      sum += arr[i];
    }
    let avg = Number((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++)
  sum += arr[i]
}

function differenceMaxMinWorker(...arr) {
  let minElement = 0;
  let maxElement = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    } else if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++
    }
  }
  
  if (countEvenElement === 0) {
    return 0;
  } else {
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {

}
