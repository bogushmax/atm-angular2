import {Component} from 'angular2/core';

import {TranslatePipe, TranslateService} from 'ng2-translate';

import {AccountService} from '../../../services/account.service'; 
import {Account, LANGUAGE_TO_CURRENCY, Currency} from '../../../services/account';

@Component({
    selector: 'balance',
    templateUrl: 'app/components/operationscreen/balance/balance.component.html',
    pipes: [ TranslatePipe ]
})
export class BalanceComponent {
    private account:Account;
    private balance:number;
    private currencyName:string;
    
    constructor(private accountService:AccountService, private translateService:TranslateService) {
        this.account = accountService.getAccount();
        this.translateService.onLangChange.subscribe(() => {
            this.updateBalance();
        });
        this.updateBalance();
    }
    
    updateBalance() {
        var currency:Currency = LANGUAGE_TO_CURRENCY[this.translateService.currentLang];
        this.currencyName = Currency[currency];
        this.balance = this.account.getBalance(currency);
    }
};