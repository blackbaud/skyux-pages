import { NavigationExtras } from '@angular/router';

/**
 * Call to action displayed prominently on the Action Hub page.
 */
export interface SkyActionHubNeedsAttention {
  /**
   * Bold text for the action item
   */
  title: string;
  /**
   * De-emphasized text for action item
   */
  message?: string;
  /**
   * Link to where to resolve action, either as an Angular route or URL
   */
  permalink: {
    route?: {
      commands: any[];
      extras?: NavigationExtras;
    };
    url?: string;
  };
}
