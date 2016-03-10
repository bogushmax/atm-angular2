System.register(['angular2/core', 'angular2/router', '../directives/secure.router.outlet', './pinpad/pinpad.component', './operationscreen/operationscreen.component', './bye/bye.component', 'ng2-translate', '../services/account.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, secure_router_outlet_1, pinpad_component_1, operationscreen_component_1, bye_component_1, ng2_translate_1, account_service_1;
    var AtmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (secure_router_outlet_1_1) {
                secure_router_outlet_1 = secure_router_outlet_1_1;
            },
            function (pinpad_component_1_1) {
                pinpad_component_1 = pinpad_component_1_1;
            },
            function (operationscreen_component_1_1) {
                operationscreen_component_1 = operationscreen_component_1_1;
            },
            function (bye_component_1_1) {
                bye_component_1 = bye_component_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            AtmComponent = (function () {
                function AtmComponent(translate) {
                    this.translate = translate;
                    translate.useStaticFilesLoader('app/translations', '.json');
                    var language = navigator.language.split('-')[0];
                    language = /(ru|en)/gi.test(language) ? language : 'en';
                    translate.use(language);
                }
                AtmComponent.prototype.changeLanguage = function (language) {
                    this.translate.use(language);
                };
                AtmComponent = __decorate([
                    core_1.Component({
                        selector: 'atm',
                        templateUrl: 'app/components/atm.component.html',
                        styleUrls: ['app/components/atm.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, secure_router_outlet_1.SecureRouterOutlet],
                        providers: [account_service_1.AccountService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'PinPad', component: pinpad_component_1.PinPadComponent },
                        { path: '/operationscreen', name: 'OperationScreen', component: operationscreen_component_1.OperationScreenComponent },
                        { path: '/bye', name: 'Bye', component: bye_component_1.ByeComponent }
                    ]), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
                ], AtmComponent);
                return AtmComponent;
            }());
            exports_1("AtmComponent", AtmComponent);
            ;
        }
    }
});
