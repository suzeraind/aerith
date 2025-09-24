export function twoSum(numbers: Array<number>, target: number): Array<number> {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const compliment = target - num;
    if (map.has(compliment)) {
      return [map.get(compliment) as number, i];
    }
    map.set(num, i);
  }

  throw Error('invalid target');
}

function twoSumTwoPonters(numbers: Array<number>, target: number): Array<number> {
  //works only on sorted arrays
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l, r];
    sum < target ? l++ : r--;
  }
  throw Error('invalid target');
}

function twoSumObj(numbers: Array<number>, target: number): Array<number> {
  const map: Record<number, number> = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const compliment = target - num;

    if (compliment in map) {
      return [map[compliment], i];
    }

    map[num] = i;
  }
  throw Error('invalid target');
}

function twoSumBrutForce(numbers: Array<number>, target: number): Array<number> {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  throw Error('invalid target');
}