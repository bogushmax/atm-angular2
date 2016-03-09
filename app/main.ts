import {provide} from 'angular2/core';

import {bootstrap}    from 'angular2/platform/browser';
import {AtmComponent} from './components/atm.component';

import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TranslateService} from 'ng2-translate';

bootstrap(AtmComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    TranslateService,
    HTTP_PROVIDERS
]);
