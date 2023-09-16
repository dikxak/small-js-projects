class App {
  _containerEl = document.querySelector('.maze-elements');
  tileDimensionPx = 52;
  tileDimensionRem = (52 / 10).toFixed(1);

  map = [
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
  ];

  createMazeElement(position, className, character) {
    const elem = document.createElement('span');

    elem.textContent = character;
    elem.style.fontSize = `${this.tileDimensionRem / 2}rem`;
    elem.style.width = elem.style.height = `${this.tileDimensionRem}rem`;

    elem.classList.add(className);

    elem.style.left = `${position.x * this.tileDimensionRem}rem`;
    elem.style.top = `${position.y * this.tileDimensionRem}rem`;

    this._containerEl.appendChild(elem);
  }
}

export default App;
