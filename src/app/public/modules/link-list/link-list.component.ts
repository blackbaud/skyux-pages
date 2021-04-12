import {
  Component,
  Input
} from '@angular/core';

import {
  SkyLink
} from './types/link';

@Component({
  selector: 'sky-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class SkyLinkListComponent {
  @Input()
  public title: string;

  @Input()
  public links: SkyLink[];
}
