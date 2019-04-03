import { compute } from '../01-fundamentals/compute';
describe('compute', () => {
  it('function should return 0', () => {
    expect(compute(-1)).toBe(0);
  })
  it('function should return number + 1', () => {
    expect(compute(1)).not.toBe(0);
  })
});