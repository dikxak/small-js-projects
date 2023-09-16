import App from './app.js';
import Key from './key.js';
import Door from './door.js';

class Player extends App {
  _messageEl = document.querySelector('.modal');
  _overlay = document.querySelector('.overlay');
  _cross = document.querySelector('.cross');

  _door;
  _key;
  _playerEl;

  _hasKey = false;
  _position = {
    x: 6,
    y: 8,
  };

  constructor() {
    super();
    this._door = new Door();
    this._key = new Key();

    this.createMazeElement(this._position, 'player', '🧑');
    this._playerEl = document.querySelector('.player');

    this._overlay.style.height = `${
      this.tileDimensionRem * this.map.length
    }rem`;

    this._gamePlay();
    this._cross.addEventListener('click', this._resetGame.bind(this));
  }

  _gamePlay() {
    window.addEventListener('keydown', e => {
      if (
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight'
      ) {
        e.preventDefault();

        if (
          !this._overlay.classList.contains('hidden') ||
          !this._overlay.classList.contains('hidden')
        )
          return;

        switch (e.key) {
          case 'ArrowUp': {
            this._moveUp();
            break;
          }

          case 'ArrowDown': {
            this._moveDown();
            break;
          }

          case 'ArrowLeft': {
            this._moveLeft();
            break;
          }

          case 'ArrowRight': {
            this._moveRight();
            break;
          }

          default:
            break;
        }

        if (
          this._position.x === this._key.position.x &&
          this._position.y === this._key.position.y
        ) {
          this._hasKey = true;
          this._key.removeKey();
        }

        if (
          this._hasKey &&
          this._door.position.x === this._position.x &&
          this._door.position.y === this._position.y
        ) {
          // Game over
          this._toggleMessage();
        }
      }
    });
  }

  _toggleMessage() {
    this._messageEl.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _resetGame() {
    this._position = {
      x: 6,
      y: 8,
    };
    this._hasKey = false;

    this._containerEl.removeChild(this._playerEl);
    this.createMazeElement(this._position, 'player', '🧑');
    this._playerEl = document.querySelector('.player');

    this._toggleMessage();
    this._key.displayKey();
  }

  _addShakeAnimation() {
    this._playerEl.classList.add('shake');
    setTimeout(() => {
      this._playerEl.classList.remove('shake');
    }, 800);
  }

  _movePlayer() {
    this._playerEl.style.left = `${
      this._position.x * this.tileDimensionRem
    }rem`;
    this._playerEl.style.top = `${this._position.y * this.tileDimensionRem}rem`;
  }

  _moveUp() {
    if (
      this._position.y === 0 ||
      this.map[this._position.y - 1][this._position.x] === 1
    ) {
      this._addShakeAnimation();
      return;
    }

    this._position.y--;
    this._movePlayer();
  }

  _moveDown() {
    if (
      this._position.y === this.map[0].length - 1 ||
      this.map[this._position.y + 1][this._position.x] === 1
    ) {
      this._addShakeAnimation();
      return;
    }

    this._position.y++;
    this._movePlayer();
  }

  _moveLeft() {
    if (
      this._position.x === 0 ||
      this.map[this._position.y][this._position.x - 1] === 1
    ) {
      this._addShakeAnimation();
      return;
    }

    this._position.x--;
    this._movePlayer();
  }

  _moveRight() {
    if (
      this._position.x === this.map[0].length - 1 ||
      this.map[this._position.y][this._position.x + 1] === 1
    ) {
      this._addShakeAnimation();
      return;
    }

    this._position.x++;
    this._movePlayer();
  }
}

export default Player;
