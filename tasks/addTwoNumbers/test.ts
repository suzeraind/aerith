import { addTwoNumbers, ListNode } from "./solution";

// Helper: array to linked list
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current: ListNode | null = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper: linked list to array
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current: ListNode | null = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe("addTwoNumbers", () => {
  test("Example 1: [2,4,3] + [5,6,4] = [7,0,8]", () => {
    const l1 = arrayToList([2, 4, 3]);
    const l2 = arrayToList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([7, 0, 8]);
  });

  test("Example 2: [0] + [0] = [0]", () => {
    const l1 = arrayToList([0]);
    const l2 = arrayToList([0]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0]);
  });

  test("Example 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]", () => {
    const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = arrayToList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test("Different lengths: [1,2] + [3,4,5] = [4,6,5]", () => {
    const l1 = arrayToList([1, 2]);
    const l2 = arrayToList([3, 4, 5]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([4, 6, 5]);
  });

  test("Carry at end: [5] + [5] = [0,1]", () => {
    const l1 = arrayToList([5]);
    const l2 = arrayToList([5]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([0, 1]);
  });

  test("Single digits: [1] + [2] = [3]", () => {
    const l1 = arrayToList([1]);
    const l2 = arrayToList([2]);
    const result = addTwoNumbers(l1, l2);
    expect(listToArray(result)).toEqual([3]);
  });
});