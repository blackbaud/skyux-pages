import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual.component';
import {ActionHubVisualComponent} from './action-hub/action-hub-visual.component';
import {PageHeaderVisualComponent} from './page-header/page-header-visual.component';
import {SkyE2eThemeSelectorModule} from '@skyux/e2e-client';
import {SkyActionHubModule} from '../../../../pages/src/modules/action-hub/action-hub.module';
import {SkyPageHeaderModule} from '../../../../pages/src/modules/page-header/page-header.module';



@NgModule({
  declarations: [
    ActionHubVisualComponent,
    PageHeaderVisualComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    SkyActionHubModule,
    SkyE2eThemeSelectorModule,
    SkyPageHeaderModule
  ]
})
export class VisualModule { }
