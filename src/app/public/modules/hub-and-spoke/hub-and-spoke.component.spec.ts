import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { expect } from '@skyux-sdk/testing';
import { SkyIconModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme';

import { HubAndSpokeFixturesComponent } from './fixtures/hub-and-spoke-fixtures.component';
import { SkyHubAndSpokeComponent } from './hub-and-spoke.component';

describe('Hub and spoke component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubAndSpokeFixturesComponent, SkyHubAndSpokeComponent],
      imports: [RouterModule, CommonModule, SkyThemeModule, SkyIconModule]
    });
  });

  it('should create a hub and spoke', () => {
    const fixture = TestBed.createComponent(HubAndSpokeFixturesComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveText('Hub Page Spoke Page');
  });
});
