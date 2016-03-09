import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {RouterOutlet, Router, ComponentInstruction} from 'angular2/router';

import {PinPadComponent} from '../components/pinpad/pinpad.component';
import {AccountService} from '../services/account.service';


@Directive({
    selector: 'loggedin-router-outlet'
})
export class LoggedInOutlet extends RouterOutlet {
    private router:Router;
    private accountService:AccountService;
  
    constructor(elementRef:ElementRef, loader:DynamicComponentLoader, 
                router:Router, @Attribute('name') nameAttribute:string) {
        super(elementRef, loader, router, nameAttribute);
        this.router = router;
        this.accountService = elementRef._appElement._injector.get(AccountService);
    }

    activate(instruction:ComponentInstruction) {
        var url = this.router.lastNavigationAttempt;
        if (url !== '/' && url !== '' && !this.accountService.getAccount()) {
            this.router.navigateByUrl('/');
        } else {
            return super.activate(instruction);
        }
    }
}