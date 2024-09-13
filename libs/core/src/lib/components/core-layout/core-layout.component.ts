import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButton } from '@angular/material/button'
import { MatCard } from '@angular/material/card'
import { MatToolbar } from '@angular/material/toolbar'

@Component({
  selector: 'oui-core-layout',
  standalone: true,
  imports: [CommonModule, MatButton, MatCard, MatToolbar],
  templateUrl: './core-layout.component.html',
  styleUrl: './core-layout.component.css',
})
export class CoreLayoutComponent {
  @Input() heading = 'Please set a heading'
}
