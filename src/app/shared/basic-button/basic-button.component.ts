import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: '[appButton], a[appButton]',
    standalone: true,
    imports: [],
    templateUrl: './basic-button.component.html',
    styleUrl: './basic-button.component.scss'
})
export class BasicButtonComponent {
  //Getting access the Dom exposed by content  projection
  @ContentChild('icon') icon!: ElementRef<HTMLElement>

}
