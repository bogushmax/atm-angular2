export enum Currency {
    USD, RUB
};

var RATES = {};
RATES[Currency.USD] = 1.00;
RATES[Currency.RUB] = 70.00;

export const LANGUAGE_TO_CURRENCY = {
    en: Currency.USD,
    ru: Currency.RUB
};

export class Account {
    private currency:Currency = Currency.USD;
    private balance:number    = 0.00;
    
    constructor(currency:Currency, balance:number) {
        this.currency = currency;
        this.balance  = balance;
    }
    
    getBalance(currency:Currency) : number {
        if (this.currency == currency) {
            return this.balance;
        } else {
            return this.convert(this.balance, this.currency, currency);
        }
    }
    
    // Return new account balance
    cashout(value:number, currency:Currency) : boolean {
        var converted:number = this.convert(value, currency, this.currency);
        if (this.balance - converted >= 0) {
            this.balance -= this.convert(value, currency, this.currency);
            return true;
        }
        return false;
    }
    
    convert(value:number, from:Currency, to:Currency) : number {
        return value / RATES[from] * RATES[to];
    }
};