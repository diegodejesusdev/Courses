import { Component } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-user',
  imports: [Game],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  username = 'diegodejesusdev';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hello ${this.username}`);
  }
}
