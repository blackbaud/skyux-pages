import { Component, Input } from '@angular/core';

import { SkyPageLink } from '../action-hub/types/page-link';

let parentLink: SkyPageLink;

@Component({
  selector: 'sky-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class SkyPageHeaderComponent {
  /**
   * Specifies a parent page to link in the page header.
   */
  @Input()
  public parentLink?: typeof parentLink;

  /**
   * Specifies a page header.
   */
   @Input()
  public pageTitle!: string;
}
