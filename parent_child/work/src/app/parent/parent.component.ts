import { Component } from '@angular/core';

 @Component ({
             selector: 'app-parent',
             template: `<app-child [message] = "message"> </app-child>`,
             styles: [" "]
 })

 export class ParentComponent {
             message = "message from parent1";
             constructor () {}
 }


// parent to child data share through input