import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';

import { SkyActionHubComponent } from './action-hub.component';
import { SkyActionHubModule } from './action-hub.module';

describe('Action hub component', async () => {
  let fixture: ComponentFixture<SkyActionHubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyActionHubModule]
    });
    fixture = TestBed.createComponent(SkyActionHubComponent);
  });

  it('should show the title', () => {
    fixture.componentInstance.data = {
      needsAttention: [],
      recentLinks: [],
      relatedLinks: [],
      title: 'Test Hub'
    };

    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toHaveText('Test Hub');
  });

  it('should show related links', async () => {
    fixture.componentInstance.data = {
      needsAttention: [],
      recentLinks: [],
      relatedLinks: [
        {
          label: 'Test Link B',
          permalink: {
            url: '#'
          }
        },
        {
          label: 'Test Link B',
          permalink: {
            url: '#'
          }
        },
        {
          label: 'Test Link C',
          permalink: {
            url: '#'
          }
        },
        {
          label: 'Test Link A',
          permalink: {
            url: '#'
          }
        }
      ],
      title: 'Test Hub'
    };

    fixture.detectChanges();
    await fixture.whenStable();
    const linkList = fixture.nativeElement.querySelector(
      'sky-link-list[ng-reflect-title="Related Links"]'
    );
    expect(linkList).toHaveText(
      'Related Links  Test Link A  Test Link B  Test Link B  Test Link C'
    );
  });

  it('should sort recently accessed links', async () => {
    fixture.componentInstance.data = {
      needsAttention: [],
      recentLinks: [
        {
          label: 'Recent Link B',
          permalink: {
            url: '#'
          },
          lastAccessed: '2011-10-05T14:48:00.000Z'
        },
        {
          label: 'Recent Link A',
          permalink: {
            url: '#'
          },
          lastAccessed: new Date('2011-10-06T14:48:00.000Z')
        },
        {
          label: 'Recent Link C',
          permalink: {
            url: '#'
          },
          lastAccessed: new Date('2011-10-04T14:48:00.000Z')
        },
        {
          label: 'Recent Link D',
          permalink: {
            url: '#'
          },
          lastAccessed: '2011-10-04T14:48:00.000Z'
        }
      ],
      relatedLinks: [],
      title: 'Test Hub'
    };

    fixture.detectChanges();
    await fixture.whenStable();
    const linkList = fixture.nativeElement.querySelector(
      'sky-link-list[ng-reflect-title="Recently Accessed"]'
    );
    expect(linkList).toHaveText(
      'Recently Accessed  Recent Link A  Recent Link B  Recent Link C  Recent Link D'
    );
  });

  it('should use a config object', () => {
    fixture.componentInstance.data = {
      needsAttention: [
        {
          title: 'Test item',
          permalink: {
            url: '#'
          }
        }
      ],
      recentLinks: [
        {
          label: 'Recent Link',
          permalink: {
            url: '#'
          },
          lastAccessed: '2011-10-05T14:48:00.000Z'
        }
      ],
      relatedLinks: [
        {
          label: 'Test Link',
          permalink: {
            url: '#'
          }
        }
      ],
      title: 'Test Hub'
    };
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toHaveText('Test Hub');
    const link1 = fixture.nativeElement.querySelector(
      'sky-link-list[ng-reflect-title="Related Links"] a'
    );
    expect(link1).toHaveText('Test Link');
    const recent1 = fixture.nativeElement.querySelector(
      'sky-link-list[ng-reflect-title="Recently Accessed"] a'
    );
    expect(recent1).toHaveText('Recent Link');
  });

  it('should show loading', fakeAsync(() => {
    fixture.componentInstance.data = undefined;
    fixture.detectChanges();
    tick(1000);
    const skyWait = fixture.nativeElement.querySelector('.sky-wait');
    expect(skyWait).toExist();
  }));
});
