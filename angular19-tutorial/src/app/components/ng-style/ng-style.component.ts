import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divColor:string = ''

  addColor(color: string) {
    this.divColor = color
  }
}
