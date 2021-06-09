import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SkyActionHubData } from './types/action-hub-data';
import { SkyActionHubNeedsAttention } from './types/action-hub-needs-attention';
import { SkyPageLink } from './types/page-link';
import { SkyRecentLink } from './types/recent-link';

/**
 * Creates an action hub to direct user attention to important
 * actions and provide quick access to common tasks.
 */
@Component({
  selector: 'sky-action-hub',
  templateUrl: './action-hub.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyActionHubComponent {
  /**
   * Passes a SkyActionHubData object to build the action hub. The page loads until
   * `[data]` has a value.
   *
   * @param value
   */
  @Input()
  public set data(value: SkyActionHubData) {
    if (!value) {
      if (this.needsAttention.length === 0) {
        this.needsAttention = 'loading';
      }
    } else {
      if ('needsAttention' in value) {
        this.needsAttention = value.needsAttention;
      } else if (this.needsAttention === 'loading') {
        this.needsAttention = [];
      }
      /* istanbul ignore next */
      if ('parentLink' in value) {
        this.parentLink = value.parentLink;
      }
      if ('recentLinks' in value) {
        this.recentLinks = SkyActionHubComponent.getRecentLinksSorted(
          value.recentLinks,
          5
        );
      }
      if ('relatedLinks' in value) {
        this.relatedLinks = SkyActionHubComponent.getRelatedLinksSorted(
          value.relatedLinks
        );
      }
      /* istanbul ignore else */
      if ('title' in value) {
        this.title = value.title;
      }
    }
  }

  @Input()
  public needsAttention: SkyActionHubNeedsAttention[] | 'loading' = [];

  @Input()
  public parentLink: SkyPageLink;

  @Input()
  public recentLinks: SkyRecentLink[] | 'loading' = [];

  @Input()
  public relatedLinks: SkyPageLink[] | 'loading' = [];

  @Input()
  public title = '';

  private static getRecentLinksSorted(
    recentLinks: SkyRecentLink[],
    limit: number
  ): SkyRecentLink[] {
    if (!recentLinks || recentLinks.length === 0) {
      return [];
    }
    return recentLinks
      .slice(0)
      .sort((a, b) => {
        const aTime =
          a.lastAccessed instanceof Date
            ? a.lastAccessed.toISOString()
            : a.lastAccessed;
        const bTime =
          b.lastAccessed instanceof Date
            ? b.lastAccessed.toISOString()
            : b.lastAccessed;
        if (aTime === bTime) {
          return 0;
        }
        return aTime > bTime ? -1 : 1;
      })
      .slice(0, limit);
  }

  private static getRelatedLinksSorted(
    relatedLinks: SkyPageLink[]
  ): SkyPageLink[] {
    if (!relatedLinks || relatedLinks.length === 0) {
      return [];
    }
    return relatedLinks.slice(0).sort((a, b) => {
      const aLabel = a.label.trim().toUpperCase();
      const bLabel = b.label.trim().toUpperCase();
      if (aLabel === bLabel) {
        return 0;
      }
      return aLabel < bLabel ? -1 : 1;
    });
  }
}
