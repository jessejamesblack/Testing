import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
  it('function should return either USD, AUD, or EUR', () => {
    expect(getCurrencies()).toEqual(['USD', 'AUD', 'EUR'])
  })
})