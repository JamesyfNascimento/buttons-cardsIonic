import { Component, Input } from '@angular/core';

/**
 * Generated class for the Header component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class Header {

  @Input() title: string;

  constructor() {
  }

}
