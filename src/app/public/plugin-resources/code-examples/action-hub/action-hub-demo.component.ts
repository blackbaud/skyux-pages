import { Component } from '@angular/core';

const pastHours = Array.from(Array(5).keys()).map((i) => {
  const date = new Date();
  date.setHours(date.getHours() - (i + 1));
  return date;
});

@Component({
  selector: 'app-action-hub-visual',
  templateUrl: './action-hub-demo.component.html'
})
export class ActionHubDemoComponent {
  public data = {
    title: 'Page title',
    needsAttention: [
      {
        title: '9 updates',
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
        title: '7 possible duplicates',
        message: 'from constituent lists',
        permalink: {
          url: '#'
        }
      },
      {
        title: '6 updates',
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
        title: '4 possible duplicates',
        message: 'from constituent lists',
        permalink: {
          url: '#'
        }
      },
      {
        title: '3 update',
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
        title: '1 possible duplicate',
        message: 'from constituent lists',
        permalink: {
          url: '#'
        }
      }
    ],
    recentLinks: [
      {
        label: 'Recent 1',
        permalink: {
          url: '#'
        },
        lastAccessed: pastHours[0]
      },
      {
        label: 'Recent 2',
        permalink: {
          url: '#'
        },
        lastAccessed: pastHours[1]
      },
      {
        label: 'Recent 3',
        permalink: {
          url: '#'
        },
        lastAccessed: pastHours[2]
      },
      {
        label: 'Recent 4',
        permalink: {
          url: '#'
        },
        lastAccessed: pastHours[3]
      },
      {
        label: 'Recent 5',
        permalink: {
          url: '#'
        },
        lastAccessed: pastHours[4]
      }
    ],
    relatedLinks: [
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
    ]
  };

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
