import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  template: `<p>dataBinding works!</p>`,
  styleUrl: './dataBinding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBindingComponent { }
