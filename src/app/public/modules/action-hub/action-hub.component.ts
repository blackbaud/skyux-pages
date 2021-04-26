import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input
} from '@angular/core';

import { SkyLink } from '../link-list/types/link';
import { NeedsAttention } from '../needs-attention/types/needs-attention';

import { Configuration } from './types/configuration';

@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyActionHubComponent {
  @Input()
  public set config(value: Configuration) {
    /* istanbul ignore else */
    if (value.needsAttention) {
      this.needsAttention = value.needsAttention;
    }
    /* istanbul ignore else */
    if (value.recentLinks) {
      this.recentLinks = value.recentLinks;
    }
    /* istanbul ignore else */
    if (value.relatedLinks) {
      this.relatedLinks = value.relatedLinks;
    }
    this.title = value.title;
    this.changeDetector.markForCheck();
  }

  @Input()
  public needsAttention: NeedsAttention[];

  @Input()
  public recentLinks: SkyLink[];

  @Input()
  public relatedLinks: SkyLink[];

  @Input()
  public title = '';

  constructor(private changeDetector: ChangeDetectorRef) {}

  public get loading(): boolean {
    return !this.title;
  }
}
