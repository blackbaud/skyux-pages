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
  SkyNeedsAttentionComponent
} from './needs-attention.component';

describe('Needs attention component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should use single column for one item', async () => {
    const fixture = TestBed.createComponent(SkyNeedsAttentionComponent);
    fixture.componentInstance.items = [
      {
        title: 'Item 1',
        message: 'Message details 1',
        permalink: {
          url: '#'
        }
      }
    ];
    fixture.detectChanges();
    const firstColumn = fixture.nativeElement.querySelector('.sky-column');
    expect(firstColumn).toHaveCssClass('sky-column-sm-12');
  });

  it('should use two columns for more than six items', async () => {
    const fixture = TestBed.createComponent(SkyNeedsAttentionComponent);
    fixture.componentInstance.items = Array.from(Array(7).keys()).map((i) => {
      return {
        title: `Item ${i + 1}`,
        message: `Message details ${i + 1}`,
        permalink: {
          url: '#'
        }
      };
    });
    fixture.detectChanges();
    const firstColumn = fixture.nativeElement.querySelector('.sky-column');
    expect(firstColumn).toHaveCssClass('sky-column-sm-6');
  });

});
