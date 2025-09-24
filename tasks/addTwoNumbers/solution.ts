export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val ?? 0);
    this.next = (next === undefined ? null : next);
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
};
