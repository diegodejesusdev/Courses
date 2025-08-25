import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {
  @Input() username = '';  
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
    id: 1,
    title: 'Uncharted 4: A Thief\'s End'
    },
    {
      id: 2,
      title: 'The Last of Us Part II'
    },
    {
      id: 3,
      title: 'Ghost of Tsushima'
    }
  ];

  favGame(name: string) {
    this.addFavoriteEvent.emit(name);
  }
}
