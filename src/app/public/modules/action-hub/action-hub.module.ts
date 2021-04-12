import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

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
  SkyActionHubComponent
} from './action-hub.component';

import {
  SkyActionHubButtonsComponent
} from './action-hub-buttons.component';

import {
  SkyActionHubContentComponent
} from './action-hub-content.component';

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
    SkyActionHubButtonsComponent,
    SkyActionHubComponent,
    SkyActionHubContentComponent,
    SkyNeedsAttentionComponent,
    SkyLinkListComponent
  ],
  exports: [
    SkyActionHubButtonsComponent,
    SkyActionHubComponent,
    SkyActionHubContentComponent
  ]
})
export class SkyActionHubModule {}
