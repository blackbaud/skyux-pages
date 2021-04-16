import { Component, Input } from '@angular/core';

import { NeedsAttention } from './types/needs-attention';

@Component({
  selector: 'sky-needs-attention',
  templateUrl: './needs-attention.component.html',
  styleUrls: ['./needs-attention.component.scss']
})
export class SkyNeedsAttentionComponent {
  @Input()
  public items: NeedsAttention[];
}
