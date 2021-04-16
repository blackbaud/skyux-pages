import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SkyLink } from '../link-list/types/link';
import { NeedsAttention } from '../needs-attention/types/needs-attention';
import { Configuration } from './types/configuration';

@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html'
})
export class SkyActionHubComponent implements OnDestroy {
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

  private ngUnsubscribe = new Subject();

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
