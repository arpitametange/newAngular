import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color='violet'
  }

}
