System.register(['angular2/core', 'ng2-translate', 'angular2/router', '../../services/account.service'], function(exports_1, context_1) {
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
    var core_1, ng2_translate_1, router_1, account_service_1;
    var PinPadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            PinPadComponent = (function () {
                function PinPadComponent(router, accountService) {
                    this.router = router;
                    this.accountService = accountService;
                    this.isLocked = false;
                    this.isInvalid = false;
                    this.lockCounter = 0;
                    this.reset();
                }
                PinPadComponent.prototype.addNumber = function (number) {
                    if (this.pincode.length < 4) {
                        this.pincode += number;
                    }
                };
                PinPadComponent.prototype.reset = function () {
                    this.pincode = '';
                };
                PinPadComponent.prototype.lock = function () {
                    var _this = this;
                    this.isLocked = true;
                    setTimeout(function () {
                        _this.reset();
                        _this.lockCounter = 0;
                        _this.isLocked = false;
                        _this.isInvalid = false;
                    }, 5000);
                };
                PinPadComponent.prototype.tryUnlock = function () {
                    if (this.accountService.tryUnlock(this.pincode)) {
                        this.lockCounter = 0;
                        this.isInvalid = false;
                        this.router.navigate(['OperationScreen']);
                    }
                    else {
                        this.lockCounter++;
                        this.isInvalid = true;
                    }
                    if (this.lockCounter == 3) {
                        this.lock();
                    }
                };
                PinPadComponent = __decorate([
                    core_1.Component({
                        selector: 'pinpad',
                        templateUrl: 'app/components/pinpad/pinpad.component.html',
                        styleUrls: ['app/components/pinpad/pinpad.component.css'],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService])
                ], PinPadComponent);
                return PinPadComponent;
            }());
            exports_1("PinPadComponent", PinPadComponent);
            ;
        }
    }
});
