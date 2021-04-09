import { Component, Input} from '@angular/core';
@Component ({
            selector:'app-child',
            template: `<p> {{  message }}</p>`,
            styles:['p{color:red} ']
})
export class ChildComponent {
            @Input() message: string='';
            Constructor (){}
}

// parent to child data share through input