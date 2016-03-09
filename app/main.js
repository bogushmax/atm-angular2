System.register(['angular2/core', 'angular2/platform/browser', './components/atm.component', 'angular2/router', 'angular2/http', 'ng2-translate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, atm_component_1, router_1, http_1, ng2_translate_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (atm_component_1_1) {
                atm_component_1 = atm_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(atm_component_1.AtmComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                ng2_translate_1.TranslateService,
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
