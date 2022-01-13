import { Currency } from '../Currency.js'
import { MoneyAmount } from '../MoneyAmount.js'

export class MoneyMaker {
  makeMoney() {
    return new MoneyAmount(1, new Currency('€'))
  }
}
