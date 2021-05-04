import { SkyActionHubNeedsAttention } from './action-hub-needs-attention';
import { SkyPageLink } from './page-link';

/**
 * Specifies a data object to drive the action hub that can be loaded from an HTTP service.
 */
export interface SkyActionHubData {
  /**
   * Specifies a page title for the action hub. The page loads until `title` has a value.
   */
  title: string;
  /**
   * Specifies action items that require attention and links to resolve them.
   */
  needsAttention?: SkyActionHubNeedsAttention[];
  /**
   * Specifies links to recently accessed items. List the five items most recently accessed by the user in reverse chronological order.
   */
  recentLinks?: SkyPageLink[];
  /**
   * Specifies links to related items. List items in alphabetical order.
   */
  relatedLinks?: SkyPageLink[];
}
