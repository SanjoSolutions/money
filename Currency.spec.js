import { Currency } from './Currency.js'

describe('Currency', () => {
  it('has a currency symbol', () => {
    const dollar = new Currency('$')
    expect(dollar.symbol).toEqual('$')
  })
})
