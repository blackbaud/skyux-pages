import {
  SkyLink
} from '../../link-list/types/link';

import {
  NeedsAttention
} from '../../needs-attention/types/needs-attention';

export interface Configuration {
  title: string;
  buttons?: SkyLink[];
  relatedLinks?: SkyLink[];
  recentLinks?: SkyLink[];
  needsAttention?: NeedsAttention[];
}
