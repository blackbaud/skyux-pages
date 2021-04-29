import { Component, Input } from '@angular/core';

import { SkyActionHubData } from './types/action-hub-data';
import { SkyActionHubNeedsAttention } from './types/action-hub-needs-attention';
import { SkyLink } from './types/link';

let data: SkyActionHubData;

/**
 * Wrapper component for the Action Hub.
 */
@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html'
})
export class SkyActionHubComponent {
  /**
   * Pass an SkyActionHubData object to build the screen. The page will be loading until `title` has a value.
   *
   * @param value
   */
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
