import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  constructor(private _Element:ElementRef) {
    this._Element.nativeElement.style.color="red"
   }
   @HostListener('mouseenter') mouseEnter(){
     this.mycolor("green");
   }
   @HostListener('mouseleave') mouseLeave(){
    this.mycolor("yellow");
  } 
  mycolor(color :string) {
    this._Element.nativeElement.style.color= color
  }

}
