import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})

export class DataBindingComponent {

  firstName: string = "Breno"
  currentAge: number = 21
  isAlive: boolean = true
  currentDate: Date = new Date()
  myPlaceholder: string = "Enter full name"
  myDivClass: string = "bg-primary"
  selectedName: string = ""

  constructor() {
    console.log(this.firstName)
    console.log(this.currentAge)
    console.log(this.isAlive)
    console.log(this.currentDate)
  }

  showWelcomeMessage() {
    alert("Welcome to my Site!")
  }

  onSingerChanges() {
    console.log("Singer changed!")
  }
}
