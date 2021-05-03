import { Component } from '@angular/core';
import { SkyThemeService, SkyThemeSettings } from '@skyux/theme';

@Component({
  selector: 'sky-hub-and-spoke-visual',
  templateUrl: './hub-and-spoke-visual.component.html'
})
export class HubAndSpokeVisualComponent {
  public spokeTitle = 'Spoke Page';
  public hubLink = {
    label: 'Hub Page',
    permalink: {
      url: '#'
    }
  };
  public spokeTitleLong =
    'Spoke Page also has a Title that some might Think is Long';
  public hubLinkLong = {
    label: 'Hub Page with a Title that has More Words than you might expect',
    permalink: {
      url: '#'
    }
  };

  constructor(private themeSvc: SkyThemeService) {}

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }
}
