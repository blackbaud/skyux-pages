import { Component, Input } from '@angular/core';

import { SkyLink } from '../link-list/types/link';
import { SkyActionHubNeedsAttention } from '../needs-attention/types/action-hub-needs-attention';

import { SkyActionHubData } from './types/action-hub-data';

let data: SkyActionHubData;

@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html'
})
export class SkyActionHubComponent {
  @Input()
  public set data(value: typeof data) {
    this.needsAttention = value.needsAttention;
    this.recentLinks = value.recentLinks;
    this.relatedLinks = value.relatedLinks;
    this.title = value.title;
  }

  public needsAttention: SkyActionHubNeedsAttention[];

  public recentLinks: SkyLink[];

  public relatedLinks: SkyLink[];

  public title = '';

  public get loading(): boolean {
    return !this.title;
  }
}
