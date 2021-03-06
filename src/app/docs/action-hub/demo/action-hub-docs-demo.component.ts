import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SkyConfirmService, SkyConfirmType } from '@skyux/modals';

@Component({
  selector: 'app-action-hub-docs-demo',
  styleUrls: ['action-hub-docs-demo.component.scss'],
  templateUrl: 'action-hub-docs-demo.component.html'
})
export class ActionHubDocsDemoComponent implements AfterViewInit {
  public data = {
    title: 'Page title',
    needsAttention: [
      {
        title: '1',
        message: 'update from portal',
        permalink: {
          url: '#'
        }
      },
      {
        title: '2',
        message: 'new messages from online donation',
        permalink: {
          url: '#'
        }
      },
      {
        title: '3',
        message: 'possible duplicates from constituent lists',
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
        lastAccessed: new Date(2021, 6, 14, 11, 45)
      },
      {
        label: 'Recent 2',
        permalink: {
          url: '#'
        },
        lastAccessed: new Date(2021, 6, 14, 11, 44)
      },
      {
        label: 'Recent 3',
        permalink: {
          url: '#'
        },
        lastAccessed: new Date(2021, 6, 14, 11, 43)
      }
    ],
    relatedLinks: [
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
    ]
  };

  @ViewChild('actionHubComponent')
  public actionHubComponent: ElementRef;

  public get dropdownItems(): string[] {
    const offset = 3;
    return Array.from(Array(3).keys()).map((i) => `Action ${i + offset}`);
  }

  constructor(private confirmService: SkyConfirmService) {}

  public ngAfterViewInit(): void {
    const items = this.actionHubComponent.nativeElement.querySelectorAll('a');
    Array.from(items).forEach((item: HTMLAnchorElement) => {
      item.addEventListener('click', ($event: MouseEvent) => {
        $event.preventDefault();
        this.buttonClick($event);
      });
    });
  }

  public buttonClick($event: MouseEvent) {
    this.confirmService.open({
      message: `You pressed ???${($event.currentTarget as HTMLElement).textContent.trim()}???`,
      type: SkyConfirmType.OK
    });
  }
}
