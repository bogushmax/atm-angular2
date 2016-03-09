import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {BalanceComponent} from './balance/balance.component';
import {CashoutComponent} from './cashout/cashout.component';

import {Router} from 'angular2/router';
import {TranslatePipe} from 'ng2-translate';

import {AccountService} from '../../services/account.service';

@Component({
    selector: 'operationscreen',
    templateUrl: 'app/components/operationscreen/operationscreen.component.html',
    styleUrls:  [ 'app/components/operationscreen/operationscreen.component.css' ],
    directives: [ CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, BalanceComponent, CashoutComponent ],
    pipes:      [ TranslatePipe ]
})
export class OperationScreenComponent {
    constructor(private accountService:AccountService, private router:Router) {}

    exit() {
        this.router.navigate(['Bye']);
    }
};