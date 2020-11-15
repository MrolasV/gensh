export default class Range {
  public min: number;
  public max: number;

  constructor (min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  contains = (x: number): boolean => {
    return x >= this.min && x <= this.max;
  }
}