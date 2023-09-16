import App from './app.js';

class Maze extends App {
  _mazeBase = document.querySelector('.maze-base');

  constructor() {
    super();
    this._buildMaze();
  }

  _buildMaze() {
    const mazeColumn = this.map[0].length;

    this._mazeBase.style.gridTemplateColumns = `repeat(${mazeColumn},${this.tileDimensionRem}rem)`;

    for (let i = 0; i < this.map.length; ++i) {
      for (let j = 0; j < this.map[i].length; ++j) {
        const elem = document.createElement('div');

        elem.classList.add(this.map[i][j] === 0 ? 'floor' : 'grass');

        elem.style.width = elem.style.height = `${this.tileDimensionRem}rem`;

        this._mazeBase.appendChild(elem);
      }
    }
  }
}

export default Maze;
