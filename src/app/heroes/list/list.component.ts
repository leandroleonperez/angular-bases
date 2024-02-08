import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Iroman', 'Hulk', 'Thor', 'Spiderman', 'She Hulk'];
  public delateHero?: string = '';

  removeHero(): void {
    this.delateHero = this.heroNames.pop();
  }




}


