System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', './balance/balance.component', './cashout/cashout.component', 'angular2/router', 'ng2-translate', '../../services/account.service'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_bootstrap_1, balance_component_1, cashout_component_1, router_1, ng2_translate_1, account_service_1;
    var OperationScreenComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (balance_component_1_1) {
                balance_component_1 = balance_component_1_1;
            },
            function (cashout_component_1_1) {
                cashout_component_1 = cashout_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            OperationScreenComponent = (function () {
                function OperationScreenComponent(accountService, router) {
                    this.accountService = accountService;
                    this.router = router;
                }
                OperationScreenComponent.prototype.exit = function () {
                    this.router.navigate(['Bye']);
                };
                OperationScreenComponent = __decorate([
                    core_1.Component({
                        selector: 'operationscreen',
                        templateUrl: 'app/components/operationscreen/operationscreen.component.html',
                        styleUrls: ['app/components/operationscreen/operationscreen.component.css'],
                        directives: [ng2_bootstrap_1.CAROUSEL_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, balance_component_1.BalanceComponent, cashout_component_1.CashoutComponent],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router])
                ], OperationScreenComponent);
                return OperationScreenComponent;
            }());
            exports_1("OperationScreenComponent", OperationScreenComponent);
            ;
        }
    }
});
