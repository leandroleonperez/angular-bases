import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10
  }];


  @Output()
  public onDeleted: EventEmitter <string> = new EventEmitter();



  onDeletCharacter(id?:string): void{
    //Todo: Emitir el id del personaje.
    if(!id) return;

    this.onDeleted.emit(id);
  }
}
