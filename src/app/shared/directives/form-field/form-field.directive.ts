import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective {

  @HostListener('blur') onBlur() {
    this.element.nativeElement.classList.toggle('ng-dirty', this.element.nativeElement.value.length);
  }

  constructor(
    private element: ElementRef,
  ) {}

}
