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
  SkyLinkListComponent
} from './link-list.component';

describe('Link list component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should show links', async () => {
    const fixture = TestBed.createComponent(SkyLinkListComponent);
    fixture.componentInstance.title = 'Full List';
    fixture.componentInstance.links = [
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

    fixture.detectChanges();
    const links = fixture.nativeElement.getElementsByTagName('a');

    expect(links.length).toBe(3);
  });

  it('should disappear when empty', async () => {
    const fixture = TestBed.createComponent(SkyLinkListComponent);
    fixture.componentInstance.title = 'Empty List';
    fixture.componentInstance.links = [];

    fixture.detectChanges();

    expect(fixture.nativeElement).not.toHaveText('Empty List');
  });

});
