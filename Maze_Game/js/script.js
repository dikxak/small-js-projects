import Maze from './maze.js';
import Player from './player.js';

class Game {
  _maze;
  _player;

  constructor() {
    this._maze = new Maze();
    this._player = new Player();
  }
}

(() => {
  new Game();
})();
