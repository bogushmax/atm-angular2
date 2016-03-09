import {Component} from 'angular2/core';

import {TranslatePipe} from 'ng2-translate';

@Component({
    selector: 'bye',
    templateUrl: 'app/components/bye/bye.component.html',
    styleUrls: [ 'app/components/bye/bye.component.css' ],
    pipes: [ TranslatePipe ]
})
export class ByeComponent {
    
};