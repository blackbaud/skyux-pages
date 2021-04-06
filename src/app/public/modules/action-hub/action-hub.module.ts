import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyActionHubComponent
} from './action-hub.component';

import {
  SkyActionButtonModule,
  SkyFluidGridModule
} from '@skyux/layout';

import {
  RouterModule
} from '@angular/router';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyIconModule,
  SkyWaitModule
} from '@skyux/indicators';

import {
  SkyThemeModule
} from '@skyux/theme';

import {
  SkyLinkListComponent
} from '../link-list/link-list.component';

import {
  SkyNeedsAttentionComponent
} from '../needs-attention/needs-attention.component';

@NgModule({
  imports: [
    CommonModule,
    SkyFluidGridModule,
    SkyActionButtonModule,
    RouterModule,
    SkyThemeModule,
    SkyI18nModule,
    SkyIconModule,
    SkyWaitModule
  ],
  declarations: [
    SkyActionHubComponent,
    SkyNeedsAttentionComponent,
    SkyLinkListComponent
  ],
  exports: [
    SkyActionHubComponent
  ]
})
export class SkyActionHubModule {}
