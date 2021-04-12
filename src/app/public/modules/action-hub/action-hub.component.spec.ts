import {
  TestBed
} from '@angular/core/testing';

import {
  of
} from 'rxjs';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyActionHubComponent
} from './action-hub.component';

import {
  SkyActionHubModule
} from './action-hub.module';

import {
  ActionHubTestComponent
} from './fixtures/action-hub.component.fixture';

describe('Action hub component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyActionHubModule
      ],
      declarations: [
        ActionHubTestComponent
      ]
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
    const link1 = fixture.nativeElement.querySelector('sky-link-list[ng-reflect-title="Related Links"] a');
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
    const link1 = fixture.nativeElement.querySelector('sky-link-list[ng-reflect-title="Related Links"] a');
    expect(link1).toHaveText('Test Link');
    const recent1 = fixture.nativeElement.querySelector('sky-link-list[ng-reflect-title="Recently Accessed"] a');
    expect(recent1).toHaveText('Recent Link');
  });

  it('should load asynchronously', async () => {
    const fixture = TestBed.createComponent(SkyActionHubComponent);
    fixture.detectChanges();

    const waiting = fixture.nativeElement.querySelectorAll('.sky-wait-mask');
    expect(waiting.length).toBe(1);

    fixture.componentInstance.config = of({
      title: 'Test Hub',
      relatedLinks: [],
      recentLinks: [],
      needsAttention: []
    });
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toHaveText('Test Hub');

    const waitOver = fixture.nativeElement.querySelectorAll('.sky-wait-mask');
    expect(waitOver.length).toBe(0);
  });
});
