System.register(['angular2/core', 'ng2-translate', '../../../services/account.service', '../../../services/account'], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, account_service_1, account_1;
    var CashoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            }],
        execute: function() {
            CashoutComponent = (function () {
                function CashoutComponent(accountService, translateService) {
                    this.accountService = accountService;
                    this.translateService = translateService;
                    this.onCashout = new core_1.EventEmitter();
                    this.account = accountService.getAccount();
                }
                CashoutComponent.prototype.cashout = function () {
                    this.account.cashout(this.value, account_1.LANGUAGE_TO_CURRENCY[this.translateService.currentLang]);
                    this.onCashout.emit(this.account);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CashoutComponent.prototype, "onCashout", void 0);
                CashoutComponent = __decorate([
                    core_1.Component({
                        selector: 'cashout',
                        templateUrl: 'app/components/operationscreen/cashout/cashout.component.html',
                        styleUrls: ['app/components/operationscreen/cashout/cashout.component.css'],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, ng2_translate_1.TranslateService])
                ], CashoutComponent);
                return CashoutComponent;
            }());
            exports_1("CashoutComponent", CashoutComponent);
            ;
        }
    }
});
