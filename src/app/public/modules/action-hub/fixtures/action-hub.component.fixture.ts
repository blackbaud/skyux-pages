import {
  Component,
  Input
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import {
  Configuration
} from '../types/configuration';

@Component({
  selector: 'skyux-action-hub-test',
  templateUrl: 'action-hub.component.fixture.html'
})
export class ActionHubTestComponent {
  @Input()
  public configAsync: Observable<Configuration>;
}
