import { Component, Input } from '@angular/core';

import { SkyLink } from '../action-hub/types/link';

@Component({
  selector: 'sky-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class SkyLinkListComponent {
  @Input()
  public links: SkyLink[];

  @Input()
  public title: string;
}
