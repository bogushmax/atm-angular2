import {Injectable} from 'angular2/core';

import {Account, Currency} from './account';

@Injectable()
export class AccountService {
    private pincode:string;
    private account:Account;
    private isUnlocked:boolean = false;

    constructor() {
        this.pincode = new Date().getUTCFullYear().toString();
        this.account = new Account(Currency.USD, 200);
    }
    
    tryUnlock(pincode: string) : boolean {
        if (pincode == this.pincode) {
            this.isUnlocked = true;
            return true;
        }
        return false;
    }
    
    getAccount() : Account {
        return this.isUnlocked ? this.account : null;
    }
};