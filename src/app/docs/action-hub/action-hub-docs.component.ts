import { Component } from '@angular/core';

import { SkyLink } from '../../public/modules/link-list/types/link';
import { NeedsAttention } from '../../public/modules/needs-attention/types/needs-attention';

@Component({
  selector: 'app-action-hub-docs',
  templateUrl: 'action-hub-docs.component.html'
})
export class ActionHubDocsComponent {
  public needsAttention: NeedsAttention[] = [
    {
      title: '1 update',
      message: 'from portal',
      permalink: {
        url: '#'
      }
    },
    {
      title: '2 new messages',
      message: 'from online donation',
      permalink: {
        url: '#'
      }
    },
    {
      title: '3 possible duplicates',
      message: 'from constituent lists',
      permalink: {
        url: '#'
      }
    }
  ];

  public recentLinks: SkyLink[] = [
    {
      label: 'Recent 1',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Recent 2',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Recent 3',
      permalink: {
        url: '#'
      }
    }
  ];

  public relatedLinks: SkyLink[] = [
    {
      label: 'Related 1',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Related 2',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Related 3',
      permalink: {
        url: '#'
      }
    }
  ];
}
