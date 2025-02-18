import { Component } from '@angular/core';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19-tutorial';
}
