import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFocusNext]'
})
export class FocusNextDirective {

  @Input() set appFocusNext(value: boolean) {
    value ? this.element.nativeElement.focus() : this.element.nativeElement.blur();
  }

  constructor(
    private element: ElementRef,
  ) { }
}
