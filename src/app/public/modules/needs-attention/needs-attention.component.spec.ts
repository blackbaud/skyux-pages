import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  SkyNeedsAttentionComponent
} from './needs-attention.component';
import {SkyActionHubModule} from '../action-hub/action-hub.module';
import {ActionHubTestComponent} from '../action-hub/fixtures/action-hub.component.fixture';

describe('Needs attention component', () => {
  let fixture: ComponentFixture<SkyNeedsAttentionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyActionHubModule
      ],
      declarations: [
        ActionHubTestComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SkyNeedsAttentionComponent);
  });

  it('should use single column for one item', async () => {
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
