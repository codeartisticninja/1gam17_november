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
    result.hue = a.hue + bias * hueDiff.rad;
    result.saturation = a.saturation + bias * satDiff;
    result.lightness = a.lightness + bias * litDiff;
    hueDiff.recycle();
    return result.normalize();
  }

  normalize(result = this) {
    result.hue = this.hue;
    while (result.hue < -Math.PI) result.hue += Math.PI * 2;
    while (result.hue > Math.PI) result.hue += -Math.PI * 2;
    result.saturation = Math.min(Math.max(0, this.saturation), 1);
    result.lightness = Math.min(Math.max(0, this.lightness), 1);
    return result;
  }

  toString() {
    return `hsl(${this.hue}rad, ${this.saturation * 100}%, ${this.lightness * 100}%)`;
  }

}
