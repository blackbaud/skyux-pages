import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-action-hub-visual',
  templateUrl: './action-hub-visual.component.html'
})
export class ActionHubVisualComponent {
  /* istanbul ignore next */
  public needsAttention = [
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
    },
    {
      title: '4 updates',
      message: 'from portal',
      permalink: {
        url: '#'
      }
    },
    {
      title: '5 new messages',
      message: 'from online donation',
      permalink: {
        url: '#'
      }
    },
    {
      title: '6 possible duplicates',
      message: 'from constituent lists',
      permalink: {
        url: '#'
      }
    },
    {
      title: '7 update',
      message: 'from portal',
      permalink: {
        url: '#'
      }
    },
    {
      title: '8 new messages',
      message: 'from online donation',
      permalink: {
        url: '#'
      }
    },
    {
      title: '9 possible duplicates',
      message: 'from constituent lists',
      permalink: {
        url: '#'
      }
    }
  ];
  /* istanbul ignore next */
  public recentLinks = [
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
    },
    {
      label: 'Recent 4',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Recent 5',
      permalink: {
        url: '#'
      }
    }
  ];
  /* istanbul ignore next */
  public relatedLinks = [
    {
      label: 'Link 1',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Link 2',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Link 3',
      permalink: {
        url: '#'
      }
    }
  ];
  /* istanbul ignore next */
  public buttons = [
    {
      label: 'Action 1',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Action 2',
      permalink: {
        url: '#'
      }
    },
    {
      label: 'Action 3',
      permalink: {
        url: '#'
      }
    }
  ];
}
