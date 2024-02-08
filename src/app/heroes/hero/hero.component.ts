import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman';
  public edad: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.edad}`;
  }

  changeHero(): void{
    this.name= 'Spiderman'
  }
  changeAge(): void{
    this.edad = 18;
  }
  resetForm(): void {
    this.name='Iroman';
    this.edad= 45;
  }
}
