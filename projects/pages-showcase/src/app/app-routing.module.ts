import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActionHubVisualComponent} from './visual/action-hub/action-hub-visual.component';
import {PageHeaderVisualComponent} from './visual/page-header/page-header-visual.component';
import {SkyThemeService} from '@skyux/theme';

const routes: Routes = [
  {
    path: 'visual/action-hub',
    component: ActionHubVisualComponent
  },
  {
    path: 'visual/page-header',
    component: PageHeaderVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SkyThemeService]
})
export class AppRoutingModule { }
