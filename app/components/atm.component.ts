import {Component, ViewEncapsulation, Injectable} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoggedInOutlet} from '../directives/loggedin.router.outlet';

import {PinPadComponent} from './pinpad/pinpad.component';
import {OperationScreenComponent} from './operationscreen/operationscreen.component';
import {ByeComponent} from './bye/bye.component';

import {TranslateService} from 'ng2-translate';

import {AccountService} from '../services/account.service';

@Component({
    selector: 'atm',
    templateUrl: 'app/components/atm.component.html',
    styleUrls: [ 'app/components/atm.component.css' ],
    directives: [ ROUTER_DIRECTIVES, LoggedInOutlet ],
    providers: [ AccountService ]
})
@RouteConfig([
    { path: '/',                name: 'PinPad',          component: PinPadComponent },
    { path: '/operationscreen', name: 'OperationScreen', component: OperationScreenComponent },
    { path: '/bye',             name: 'Bye',             component: ByeComponent }
])
export class AtmComponent {
    constructor(private translate: TranslateService) {
        translate.useStaticFilesLoader('app/translations', '.json');

        var language = navigator.language.split('-')[0];
        language = /(ru|en)/gi.test(language) ? language : 'en';
    
        translate.use(language);
        
    }
    changeLanguage(language : string) {
        this.translate.use(language);
    }
};