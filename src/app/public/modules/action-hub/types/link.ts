import { NavigationExtras } from '@angular/router';

/**
 * Used to display related and recently accessed links.
 */
export interface SkyLink {
  /**
   * Link text
   */
  label: string;
  /**
   * Link destination
   */
  permalink?: {
    route?: {
      commands: any[];
      extras?: NavigationExtras;
    };
    url?: string;
  };
}
