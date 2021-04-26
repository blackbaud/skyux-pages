import { Component, Input } from '@angular/core';

import { SkyLink } from '../link-list/types/link';
import { NeedsAttention } from '../needs-attention/types/needs-attention';

import { Configuration } from './types/configuration';

@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html'
})
export class SkyActionHubComponent {
  @Input()
  public set config(value: Configuration | any) {
    this.needsAttention = value.needsAttention || [];
    this.recentLinks = value.recentLinks || [];
    this.relatedLinks = value.relatedLinks || [];
    /* istanbul ignore else */
    if (value.title) {
      this.title = value.title;
    }
  }

  @Input()
  public needsAttention: NeedsAttention[];

  @Input()
  public recentLinks: SkyLink[];

  @Input()
  public relatedLinks: SkyLink[];

  @Input()
  public title = '';

  public get loading(): boolean {
    return !this.title;
  }
}
