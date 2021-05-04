import { NavigationExtras } from '@angular/router';

/**
 * Used to display related and recently accessed links.
 */
export interface SkyPageLink {
  /**
   * Link text
   */
  label: string;
  /**
   * Link destination, either as an Angular route or URL
   */
  permalink: {
    route?: {
      commands: any[];
      extras?: NavigationExtras;
    };
    url?: string;
  };
}
