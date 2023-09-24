class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let field;
let rez = 20;
let cols, rows;

function setup() {
  createCanvas(600, 400);
  cols = 1 + width / rez;
  rows = 1 + height / rez;
  field = [];
  for (let i = 0; i < cols; i++) {
    field[i] = [];
    for (let j = 0; j < rows; j++) {
      field[i][j] = Math.floor(Math.random() * 2);
    }
  }
}

function lineV(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

function draw() {
  background(127);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      stroke(field[i][j] * 255);
      strokeWeight(rez * 0.2);
      point(i * rez, j * rez);
    }
  }
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      let x = i * rez;
      let y = j * rez;
      let a = new PVector(x + rez * 0.5, y);
      let b = new PVector(x + rez, y + rez * 0.5);
      let c = new PVector(x + rez * 0.5, y + rez);
      let d = new PVector(x, y + rez * 0.5);
      let state = getState(
        field[i][j],
        field[i + 1][j],
        field[i + 1][j + 1],
        field[i][j + 1]
      );

      stroke(255);
      strokeWeight(1);
      switch (state) {
        case 1:
          lineV(c, d);
          break;
        case 2:
          lineV(b, c);
          break;
        case 3:
          lineV(b, d);
          break;
        case 4:
          lineV(a, b);
          break;
        case 5:
          lineV(a, d);
          lineV(b, c);
          break;
        case 6:
          lineV(a, c);
          break;
        case 7:
          lineV(a, d);
          break;
        case 8:
          lineV(a, d);
          break;
        case 9:
          lineV(a, c);
          break;
        case 10:
          lineV(a, b);
          lineV(c, b);
          break;
        case 11:
          lineV(a, b);
          break;
        case 12:
          lineV(b, d);
          break;
        case 13:
          lineV(b, c);
          break;
        case 14:
          lineV(c, d);
          break;
      }
    }
  }
}

function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}
