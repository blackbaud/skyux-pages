import {
  TestBed
} from '@angular/core/testing';

import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyActionHubComponent
} from './action-hub.component';

import {
  Component,
  Input
} from '@angular/core';

import {
  Observable, of
} from 'rxjs';

import {
  Configuration
} from './types/configuration';

import {
  SkyActionHubModule
} from './action-hub.module';

// Test component

@Component({
  selector: 'skyux-action-hub-test',
  template: `
    <sky-action-hub
      [config]="configAsync"
    ></sky-action-hub>
  `
})
class ActionHubTestComponent {
  @Input()
  public configAsync: Observable<Configuration>;
}

// end Test component

describe('Action hub component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyAppTestModule,
        SkyActionHubModule
      ],
      declarations: [
        ActionHubTestComponent
      ]
    });
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

  it('should show related links', () => {
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
    const link1 = fixture.nativeElement.querySelector('sky-link-list[title="Related Links"] a');
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
    const link1 = fixture.nativeElement.querySelector('sky-link-list[title="Related Links"] a');
    expect(link1).toHaveText('Test Link');
    const recent1 = fixture.nativeElement.querySelector('sky-link-list[title="Recently Accessed"] a');
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
