import {Component, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';

import {TranslatePipe, TranslateService} from 'ng2-translate';

import {AccountService} from '../../../services/account.service';
import {Account, LANGUAGE_TO_CURRENCY} from '../../../services/account';

@Component({
    selector: 'cashout',
    templateUrl: 'app/components/operationscreen/cashout/cashout.component.html',
    styleUrls: [ 'app/components/operationscreen/cashout/cashout.component.css' ],
    pipes: [ TranslatePipe ]
})
export class CashoutComponent {
    @Output() onCashout:EventEmitter<any> = new EventEmitter();
    
    private account:Account;
    private value:number;
    
    constructor(private accountService:AccountService, private translateService:TranslateService) {
        this.account = accountService.getAccount();
    }
    
    cashout() {
        this.account.cashout(this.value, LANGUAGE_TO_CURRENCY[this.translateService.currentLang]);
        this.onCashout.emit(this.account);
    }
};