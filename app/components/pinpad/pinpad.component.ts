import {Component} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate';
import {Router} from 'angular2/router';

import {AccountService} from '../../services/account.service';

@Component({
    selector:    'pinpad',
    templateUrl: 'app/components/pinpad/pinpad.component.html',
    styleUrls:   [ 'app/components/pinpad/pinpad.component.css' ],
    pipes:       [ TranslatePipe ]
})
export class PinPadComponent {
    private pincode: string;
    private isLocked: boolean = false;
    private isInvalid: boolean = false;
    private lockCounter: number = 0;
    
    constructor(private router: Router, private accountService: AccountService) {
        this.reset();
    }
    
    addNumber(number: number) {
        if (this.pincode.length < 4) {
            this.pincode += number;
        }
    }
    
    reset() {
        this.pincode = '';
    }
    
    lock() {
        this.isLocked = true;
        setTimeout(() => {
            this.reset()
            this.lockCounter = 0;
            this.isLocked  = false;
            this.isInvalid = false;
        }, 5000);
    }
    
    tryUnlock() {
        if (this.accountService.tryUnlock(this.pincode)) {
            this.lockCounter = 0;
            this.isInvalid   = false;
            this.router.navigate(['OperationScreen']);
        } else {
            this.lockCounter++;
            this.isInvalid = true;
        }
        
        if (this.lockCounter == 3) {
            this.lock();
        }
    }
};