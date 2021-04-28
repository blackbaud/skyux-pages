import { SkyLink } from '../../link-list/types/link';
import { SkyActionHubNeedsAttention } from '../../needs-attention/types/action-hub-needs-attention';

export type SkyActionHubData = {
  needsAttention?: SkyActionHubNeedsAttention[];
  recentLinks?: SkyLink[];
  relatedLinks?: SkyLink[];
  title?: string;
};
