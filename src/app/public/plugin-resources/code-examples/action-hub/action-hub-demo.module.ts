import { NgModule } from '@angular/core';

import { SkyActionHubModule } from '../../../modules/action-hub/action-hub.module';

import { ActionHubDemoComponent } from './action-hub-demo.component';

@NgModule({
  declarations: [ActionHubDemoComponent],
  imports: [SkyActionHubModule]
})
export class ActionHubDemoModule {}
