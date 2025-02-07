import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  bandaList:string[] = ["Death", "Guns n' Roses", "One Direction", "System of a Down"]

  singerArray: any[] = [
    {singId: 1, nome: "Chuck Schuldiner", band: "Death"},
    {singId: 2, nome: "Axl Rose", band: "Guns n' Roses"},
    {singId: 3, nome: "Liam Page", band: "One Direction"},
    {singId: 4, nome: "Serj Tankian", band: "System of a Down"},
  ]

  getKeys(): string[] {
    return Object.keys(this.singerArray[0]);
}

}