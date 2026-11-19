export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = Math.floor(Math.random() * 10) + 1;
    if (Math.random() > .7) {
      this.secret = true;
    } else {
      this.secret = false;
    }
  }

  public getValue(): number {
    return this.value;
  }

  /**
   * a
   * @returns a
   */
  public isSecret(): boolean {
    return this.secret;
  }
}
