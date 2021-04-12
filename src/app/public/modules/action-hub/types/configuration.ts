import {
  SkyLink
} from '../../link-list/types/link';

import {
  NeedsAttention
} from '../../needs-attention/types/needs-attention';

export interface Configuration {
  needsAttention?: NeedsAttention[];
  recentLinks?: SkyLink[];
  relatedLinks?: SkyLink[];
  title: string;
}
