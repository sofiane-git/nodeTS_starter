import add from '@src/math/add';

describe('Additional function', () => {
  it('should return the good number', () => {
    expect(add(1, 2)).toBe(3);
  });
});
