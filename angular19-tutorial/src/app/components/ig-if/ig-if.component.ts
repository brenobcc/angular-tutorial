import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ig-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ig-if.component.html',
  styleUrl: './ig-if.component.css'
})
export class IgIfComponent {
  visibleDiv: boolean = false;
  text: string = "Mostrar";
  showClass: string = "btn btn-success mx-3"
  name1:string = ""
  name2:string = ""

  showDiv() {
    if (this.visibleDiv) {
      this.text = "Mostrar"
      this.visibleDiv = false
      this.showClass = "btn btn-success mx-3"
    }
    else {
    this.text = "Esconder"
    this.visibleDiv = true
    this.showClass= "btn btn-danger mx-3"
    }
  }
}
