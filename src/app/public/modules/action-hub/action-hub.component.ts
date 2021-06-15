import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
   * Provides a list of items that need attention, or "loading" to show a waiting indicator.
   */
  @Input()
  public needsAttention: SkyActionHubNeedsAttention[] | 'loading' = [];

  /**
   * Links back to a parent page if needed.
   */
  @Input()
  public parentLink: SkyPageLink;

  /**
   * Provides a list of recently access links, or "loading" to show a waiting indicator.
   */
  @Input()
  public recentLinks: SkyRecentLink[] | 'loading' = [];

  /**
   * Provides a list of related links, or "loading" to show a waiting indicator.
   */
  @Input()
  public relatedLinks: SkyPageLink[] | 'loading' = [];

  /**
   * Sets the H1 title for the page.
   */
  @Input()
  public title = '';

  public getRecentLinksSorted(
    recentLinks: SkyRecentLink[] | 'loading',
    limit: number
  ): SkyRecentLink[] | 'loading' {
    if (recentLinks === 'loading') {
      return 'loading';
    }
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

  public getRelatedLinksSorted(
    relatedLinks: SkyPageLink[] | 'loading'
  ): SkyPageLink[] | 'loading' {
    if (relatedLinks === 'loading') {
      return 'loading';
    }
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
