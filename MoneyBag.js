import { MoneyAmount } from './MoneyAmount.js'

export class MoneyBag {
  constructor() {
    this.moneyAmounts = new Map()
  }

  add(moneyAmount) {
    if (this.moneyAmounts.has(moneyAmount.currency)) {
      const currencyMoneyAmount = this.moneyAmounts.get(moneyAmount.currency)
      currencyMoneyAmount.amount += moneyAmount.amount
      this.moneyAmounts.set(currencyMoneyAmount.currency, currencyMoneyAmount)
    } else {
      this.moneyAmounts.set(moneyAmount.currency, new MoneyAmount(moneyAmount.amount, moneyAmount.currency))
    }
  }

  get(currency) {
    if (this.moneyAmounts.has(currency)) {
      const currencyMoneyAmount = this.moneyAmounts.get(currency)
      return new MoneyAmount(currencyMoneyAmount.amount, currencyMoneyAmount.currency)
    } else {
      return new MoneyAmount(0, currency)
    }
  }
}
