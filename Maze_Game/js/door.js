import App from './app.js';

class Door extends App {
  position = {
    x: 9,
    y: 0,
  };

  constructor() {
    super();
    this.createMazeElement(this.position, 'door', '🚪');
  }
}

export default Door;
