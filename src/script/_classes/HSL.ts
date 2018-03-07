import Angle from "./lib/utils/Angle";

/**
 * HSL class
 */

var pool: HSL[] = [];

export default class HSL {

  static dispense() {
    return pool.pop() || new HSL();
  }

  recycle() {
    if (pool.indexOf(this) !== -1) return;
    pool.push(this);
  }

  constructor(public hue = 0, public saturation = 0, public lightness = 0) {
    this.normalize();
  }

  set(hue = this.hue, saturation = this.saturation, lightness = this.lightness) {
    this.hue = hue || 0;
    this.saturation = saturation || 0;
    this.lightness = lightness || 0;
    return this.normalize();
  }

  copyFrom(a: HSL) {
    return this.set(a.hue, a.saturation, a.lightness);
  }

  copyTo(a: HSL) {
    return a.set(this.hue, this.saturation, this.lightness);
  }

  blend(a: HSL, b: HSL = this, bias = .5, result = this) {
    let hueDiff = Angle.dispense();

    hueDiff.set(b.hue).subtractRad(a.hue);
    let satDiff = b.saturation - a.saturation;
    let litDiff = b.lightness - a.lightness;

    if (a.saturation < b.saturation) {
      a.hue = a.hue + (satDiff / b.saturation) * hueDiff.rad;
      hueDiff.set(b.hue).subtractRad(a.hue);
    }
    if (b.saturation < a.saturation) {
      b.hue = b.hue + (satDiff / a.saturation) * hueDiff.rad;
      hueDiff.set(b.hue).subtractRad(a.hue);
    }

    result.hue = a.hue + bias * hueDiff.rad;
    result.saturation = Math.max(a.saturation, b.saturation);
    result.lightness = a.lightness + bias * litDiff;

    hueDiff.recycle();
    return result.normalize();
  }

  normalize(result = this) {
    let ang = Angle.dispense();
    ang.set(this.hue);
    result.hue = ang.rad;
    result._hueDeg = ang.deg;
    // while (result.hue < -Math.PI) result.hue += Math.PI * 2;
    // while (result.hue > Math.PI) result.hue += -Math.PI * 2;
    result.saturation = Math.min(Math.max(0, this.saturation), 1);
    result.lightness = Math.min(Math.max(0, this.lightness), 1);
    if (Math.abs(result.lightness - Math.round(result.lightness)) < .1) result.saturation = 0;
    ang.recycle();
    return result;
  }

  toString() {
    let str = `hsl(${this._hueDeg}, ${this.saturation * 100}%, ${this.lightness * 100}%)`;
    return str;
  }

  /*
    _privates
  */

  private _hueDeg = -1;

}
