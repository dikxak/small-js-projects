import App from './app.js';

class Key extends App {
  position = {
    x: 7,
    y: 4,
  };

  _keyEl;

  constructor() {
    super();
    this.createMazeElement(this.position, 'key', '🔑');

    this._keyEl = document.querySelector('.key');
  }

  removeKey() {
    this._keyEl.style.opacity = 0;
  }

  displayKey() {
    this._keyEl.style.opacity = 1;
  }
}

export default Key;
