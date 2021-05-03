import { NgModule } from '@angular/core';
import { SkyDocsToolsModule, SkyDocsToolsOptions } from '@skyux/docs-tools';
import { SkyAppLinkModule } from '@skyux/router';

import { SkyActionHubModule, SkyHubAndSpokeModule } from './public/public_api';

@NgModule({
  exports: [
    SkyActionHubModule,
    SkyHubAndSpokeModule,
    SkyAppLinkModule,
    SkyDocsToolsModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-pages',
        packageName: '@skyux/pages'
      }
    }
  ]
})
export class AppExtrasModule {}
