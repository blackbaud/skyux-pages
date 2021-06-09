import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyKeyInfoModule } from '@skyux/indicators';

import { SkyActionHubComponent } from './action-hub.component';
import { SkyActionHubModule } from './action-hub.module';
import { ActionHubAsyncFixtureComponent } from './fixtures/action-hub-async-fixture.component';
import { ActionHubContentFixtureComponent } from './fixtures/action-hub-content-fixture.component';
import { ActionHubInputsFixtureComponent } from './fixtures/action-hub-inputs-fixture.component';

describe('Action hub component', async () => {
  describe('Synchronous', async () => {
    let fixture: ComponentFixture<SkyActionHubComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SkyActionHubModule, RouterTestingModule.withRoutes([])]
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

  describe('Asynchronous', async () => {
    let fixture: ComponentFixture<ActionHubAsyncFixtureComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ActionHubAsyncFixtureComponent],
        imports: [SkyActionHubModule, RouterTestingModule.withRoutes([])]
      });
      fixture = TestBed.createComponent(ActionHubAsyncFixtureComponent);
    });

    it('should show loading and then content', fakeAsync(() => {
      fixture.detectChanges();
      tick(1000);
      const skyWait = fixture.nativeElement.querySelector('.sky-wait');
      expect(skyWait).toExist();
      fixture.componentInstance.data.next({
        title: 'Page title',
        recentLinks: [
          {
            label: 'Recent Link',
            permalink: {
              url: '#'
            },
            lastAccessed: new Date()
          }
        ]
      });
      fixture.detectChanges();
      tick(1000);
      expect(fixture.nativeElement.querySelectorAll('.sky-wait').length).toBe(
        0
      );
      const recent1 = fixture.nativeElement.querySelector(
        'sky-link-list[ng-reflect-title="Recently Accessed"] a'
      );
      expect(recent1).toHaveText('Recent Link');
    }));

    it('should show empty needs attention language', fakeAsync(() => {
      fixture.detectChanges();
      tick(1000);
      const skyWait = fixture.nativeElement.querySelector('.sky-wait');
      expect(skyWait).toExist();
      fixture.componentInstance.data.next({
        title: 'Page title',
        needsAttention: []
      });
      fixture.detectChanges();
      tick(1000);
      expect(fixture.nativeElement.querySelectorAll('.sky-wait').length).toBe(
        0
      );
      expect(fixture.nativeElement.textContent).toContain(
        'The needs attention list is currently empty'
      );
    }));
  });

  describe('Inputs', () => {
    let fixture: ComponentFixture<ActionHubInputsFixtureComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ActionHubInputsFixtureComponent],
        imports: [SkyActionHubModule, RouterTestingModule.withRoutes([])]
      });
      fixture = TestBed.createComponent(ActionHubInputsFixtureComponent);
    });

    it('should load with separate inputs', fakeAsync(() => {
      fixture.componentInstance.needsAttention = 'loading';
      fixture.componentInstance.relatedLinks = 'loading';
      fixture.componentInstance.recentLinks = 'loading';
      fixture.detectChanges();
      tick(1000);
      const skyWait = fixture.nativeElement.querySelector('.sky-wait');
      expect(skyWait).toExist();
      fixture.componentInstance.needsAttention = [
        {
          title: '1',
          message: 'Action',
          permalink: {
            url: '/'
          }
        }
      ];

      fixture.componentInstance.relatedLinks = [
        {
          label: 'Related',
          permalink: {
            url: '/'
          }
        }
      ];

      fixture.componentInstance.recentLinks = [
        {
          label: 'Recent',
          permalink: {
            url: '/'
          },
          lastAccessed: new Date()
        }
      ];

      fixture.componentInstance.parentLink = {
        label: 'Parent',
        permalink: {
          url: '/'
        }
      };

      fixture.componentInstance.title = 'Action Hub';

      fixture.componentInstance.loading = false;

      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('.sky-wait').length).toBe(
        0
      );
      const recent1 = fixture.nativeElement.querySelector(
        'sky-link-list[ng-reflect-title="Recently Accessed"] a'
      );
      expect(recent1).toHaveText('Recent');
    }));
  });

  describe('Embedded ng-content', async () => {
    let fixture: ComponentFixture<ActionHubContentFixtureComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ActionHubContentFixtureComponent],
        imports: [
          SkyActionHubModule,
          SkyKeyInfoModule,
          RouterTestingModule.withRoutes([])
        ]
      });
      fixture = TestBed.createComponent(ActionHubContentFixtureComponent);
    });

    it('should show changes in embedded content', fakeAsync(() => {
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('hello world');
      fixture.componentInstance.label = 'bar';
      fixture.componentInstance.value = 'foo';
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('foo bar');
    }));
  });
});
