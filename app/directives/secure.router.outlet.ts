import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {RouterOutlet, Router, ComponentInstruction} from 'angular2/router';

import {PinPadComponent} from '../components/pinpad/pinpad.component';
import {AccountService} from '../services/account.service';

@Directive({
    selector: 'secure-router-outlet'
})
export class SecureRouterOutlet extends RouterOutlet {
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
        if (['/', ''].indexOf(url) == -1 && !this.accountService.getAccount()) {
            this.router.navigateByUrl('/');
        } else {
            return super.activate(instruction);
        }
    }
}