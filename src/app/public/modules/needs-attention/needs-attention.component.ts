import { Component, Input } from '@angular/core';
import { SkyFluidGridGutterSize } from '@skyux/layout';

import { SkyActionHubNeedsAttention } from './types/action-hub-needs-attention';

@Component({
  selector: 'sky-needs-attention',
  templateUrl: './needs-attention.component.html',
  styleUrls: ['./needs-attention.component.scss']
})
export class SkyNeedsAttentionComponent {
  @Input()
  public items: SkyActionHubNeedsAttention[];

  public readonly gutterSize = SkyFluidGridGutterSize.Large;
}
