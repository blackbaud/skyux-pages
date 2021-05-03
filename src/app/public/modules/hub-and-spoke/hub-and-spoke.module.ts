import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkyIconModule } from '@skyux/indicators';
import { SkyThemeModule } from '@skyux/theme';

import { SkyHubAndSpokeComponent } from './hub-and-spoke.component';

@NgModule({
  imports: [CommonModule, RouterModule, SkyIconModule, SkyThemeModule],
  declarations: [SkyHubAndSpokeComponent],
  exports: [SkyHubAndSpokeComponent]
})
export class SkyHubAndSpokeModule {}
