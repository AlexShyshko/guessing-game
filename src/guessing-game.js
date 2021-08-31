class GuessingGame {
  constructor() {
    this.first;
    this.last;
    this.middle;
  }
  
  setRange(min, max) {
    this.first = min;
    this.last = max;
  }

  guess() {
    this.middle = (Math.round((this.last - this.first) / 2)) + this.first;
    return this.middle;
  }

  lower() {
    this.middle = (Math.round((this.last - this.first) / 2)) + this.first;
    this.last = this.middle;
  }

  greater() {
    this.middle = (Math.round((this.last - this.first) / 2)) + this.first;
    this.first = this.middle;
  }
}

module.exports = GuessingGame;
