import { TestBed } from '@angular/core/testing';
import { expect } from '@skyux-sdk/testing';
import { SkyIconModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme';

import { HubAndSpokeFixturesComponent } from './fixtures/hub-and-spoke-fixtures.component';
import { SkyHubAndSpokeComponent } from './hub-and-spoke.component';

describe('Hub and spoke component', () => {
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubAndSpokeFixturesComponent, SkyHubAndSpokeComponent],
      imports: [SkyThemeModule, SkyIconModule]
    });
  });

  it('should create a hub and spoke', () => {
    const fixture = TestBed.createComponent(HubAndSpokeFixturesComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveText('Hub Page Spoke Page');
  });
});
