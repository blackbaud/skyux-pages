import { Component } from '@angular/core';

@Component({
  selector: 'sky-hub-and-spoke-fixtures',
  templateUrl: './hub-and-spoke-fixtures.component.html'
})
export class HubAndSpokeFixturesComponent {
  public spokeTitle = 'Spoke Page';
  public hubLink = {
    label: 'Hub Page',
    permalink: {
      url: '#'
    }
  };
}
