import { Currency } from './Currency.js'
import { MoneyAmount } from './MoneyAmount.js'
import { MoneyBag } from './MoneyBag.js'

describe('MoneyBag', () => {
  it('can hold money amount of multiple currencies', () => {
    const dollar = new Currency('$')
    const euro = new Currency('€')
    const moneyBag = new MoneyBag()
    const dollarMoneyAmount = new MoneyAmount(1, dollar)
    moneyBag.add(dollarMoneyAmount)
    const euroMoneyAmount = new MoneyAmount(2, euro)
    moneyBag.add(euroMoneyAmount)
    expect(moneyBag.get(dollar).amount).toEqual(1)
    expect(moneyBag.get(euro).amount).toEqual(2)
  })

  it('supports adding a money amount to a currency from which already money is in the bag', () => {
    const dollar = new Currency('$')
    const moneyBag = new MoneyBag()
    const dollarMoneyAmount1 = new MoneyAmount(1, dollar)
    moneyBag.add(dollarMoneyAmount1)
    const dollarMoneyAmount2 = new MoneyAmount(2, dollar)
    moneyBag.add(dollarMoneyAmount2)
    expect(moneyBag.get(dollar).amount).toEqual(3)
  })

  it('returns a money amount of 0 when there is no money of the currency in the bag', () => {
    const dollar = new Currency('$')
    const moneyBag = new MoneyBag()
    expect(moneyBag.get(dollar).amount).toEqual(0)
  })
})
