import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormField]'
})
export class FormFieldDirective {

  public readonly parent = this.element.nativeElement.parentElement;

  @HostListener('focus') onFocus() {
  }

  @HostListener('blur') onBlur() {
  }

  @HostListener('keyup') onKeyUp() {
  }

  constructor(
    private element: ElementRef,
  ) {}

}
