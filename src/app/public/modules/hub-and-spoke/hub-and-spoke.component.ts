import { Component, Input } from '@angular/core';

import { SkyPageLink } from '../action-hub/types/page-link';

let hubLink: SkyPageLink;

@Component({
  selector: 'sky-hub-and-spoke',
  templateUrl: './hub-and-spoke.component.html',
  styleUrls: ['./hub-and-spoke.component.scss']
})
export class SkyHubAndSpokeComponent {
  @Input()
  public hubLink!: typeof hubLink;

  @Input()
  public spokeTitle!: string;
}
