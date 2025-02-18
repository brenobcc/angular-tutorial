import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divBgColor: string = "bg-danger"
  isChecked: boolean = false
  divInput: string = ''


  changeColor(className: string) {
    this.divBgColor = className
  }
}
