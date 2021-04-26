import { TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';

import { SkyActionHubComponent } from './action-hub.component';
import { SkyActionHubModule } from './action-hub.module';

describe('Action hub component', async () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyActionHubModule]
    }).compileComponents();
  });

  it('should show the title', () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.componentInstance.title = 'Test Hub';
    fixture.componentInstance.relatedLinks = [];
    fixture.componentInstance.recentLinks = [];
    fixture.componentInstance.needsAttention = [];

    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toHaveText('Test Hub');
  });

  it('should show related links', async () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.componentInstance.title = 'Test Hub';
    fixture.componentInstance.relatedLinks = [
      {
        label: 'Test Link',
        permalink: {
          url: '#'
        }
      }
    ];
    fixture.componentInstance.recentLinks = [];
    fixture.componentInstance.needsAttention = [];

    fixture.detectChanges();
    await fixture.whenStable();
    const link1 = fixture.nativeElement.querySelector(
      'sky-link-list[ng-reflect-title="Related Links"] a'
    );
    expect(link1).toHaveText('Test Link');
  });

  it('should use a config object', () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.componentInstance.config = {
      title: 'Test Hub',
      relatedLinks: [
        {
          label: 'Test Link',
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
          }
        }
      ],
      needsAttention: [
        {
          title: 'Test item',
          permalink: {
            url: '#'
          }
        }
      ]
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

  it('should show loading screen', async () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const wait = fixture.nativeElement.querySelector('sky-wait [aria-label]');
    expect(wait.ariaLabel).toBe('Page loading. Please wait.');
  });

  it('should work with an empty config object', () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.componentInstance.config = {
      title: 'Test Hub'
    };
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toHaveText('Test Hub');
  });
});
