import { MoneyMaker } from './MoneyMaker.js'

describe('MoneyMaker', () => {
  it('makes money', () => {
    const moneyMaker = new MoneyMaker()
    const money = moneyMaker.makeMoney()
    expect(money.amount).toBeGreaterThan(0)
  })
})
