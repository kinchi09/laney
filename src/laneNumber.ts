export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = 0;
    this.secret = false;
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
