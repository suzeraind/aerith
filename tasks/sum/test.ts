import { sum } from './solution';

describe('Sum function', () => {
  it('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should not add two numbers incorrectly', () => {
    expect(sum(2, 3)).not.toBe(6);
  })
});