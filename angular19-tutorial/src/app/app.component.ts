import { Component } from '@angular/core';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { IgIfComponent } from './components/ig-if/ig-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

@Component({
  selector: 'app-root',
  imports: [IgIfComponent, NgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19-tutorial';
}
