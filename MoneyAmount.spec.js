import { Currency } from './Currency.js'
import { MoneyAmount } from './MoneyAmount.js'

describe('MoneyAmount', () => {
  it('has a currency', () => {
    const dollar = new Currency('$')
    const moneyAmount = new MoneyAmount(1, dollar)
    expect(moneyAmount.currency).toBe(dollar)
  })
})
