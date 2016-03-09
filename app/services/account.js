System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Currency, RATES, LANGUAGE_TO_CURRENCY, Account;
    return {
        setters:[],
        execute: function() {
            (function (Currency) {
                Currency[Currency["USD"] = 0] = "USD";
                Currency[Currency["RUB"] = 1] = "RUB";
            })(Currency || (Currency = {}));
            exports_1("Currency", Currency);
            ;
            RATES = {};
            RATES[Currency.USD] = 1.00;
            RATES[Currency.RUB] = 70.00;
            exports_1("LANGUAGE_TO_CURRENCY", LANGUAGE_TO_CURRENCY = {
                en: Currency.USD,
                ru: Currency.RUB
            });
            Account = (function () {
                function Account(currency, balance) {
                    this.currency = Currency.USD;
                    this.balance = 0.00;
                    this.currency = currency;
                    this.balance = balance;
                }
                Account.prototype.getBalance = function (currency) {
                    if (this.currency == currency) {
                        return this.balance;
                    }
                    else {
                        return this.convert(this.balance, this.currency, currency);
                    }
                };
                // Return new account balance
                Account.prototype.cashout = function (value, currency) {
                    var converted = this.convert(value, currency, this.currency);
                    if (this.balance - converted >= 0) {
                        this.balance -= this.convert(value, currency, this.currency);
                        return true;
                    }
                    return false;
                };
                Account.prototype.convert = function (value, from, to) {
                    return value / RATES[from] * RATES[to];
                };
                return Account;
            }());
            exports_1("Account", Account);
            ;
        }
    }
});
