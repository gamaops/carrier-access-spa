import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'div[appEntry]',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  constructor(
    private element: ElementRef
  ) {
    this.setup();
  }

  private setup(): void {
    this.element.nativeElement.setAttribute('bp', 'container');
  }
}
