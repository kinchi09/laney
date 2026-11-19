import Lane from "./lane.js";
import LaneNumber from "./laneNumber.js";

export default class Laney {
  private busted: boolean;

  private lanes :Lane[];

  private nextNumbers: LaneNumber[];

  public constructor(numberOfLanes: number = 3) {
    this.busted = false;
    this.lanes = [];
    this.nextNumbers = [];
    for (let i: number = 0; i < numberOfLanes; i++) {
      this.lanes.push(new Lane());
      this.nextNumbers.push(new LaneNumber());
    }
  }

  /**
   * Places the next pending number into the specified lane and then enqueues a new next number.
   * Does nothing if the game is already busted.
   * @param laneIndex index of the lane to receive the number.
   * @returns void
   */
  public placeNumberInLane(laneIndex: number): void {
    this.lanes[laneIndex].addNumber(this.nextNumbers[0]);
  }

  /**
   * Returns a message about the current game state.
   * If busted, indicates that the game is over. Otherwise, lists the next numbers.
   * @returns string
   */
  public getMessage(): string {
    if (!this.busted) {
      return `${this.nextNumbers[0]} ${this.nextNumbers[1]} ${this.nextNumbers[2]}`;
    }
    return "You busted! Start a new game?";
  }

  /**
   * Returns the total score for the specified lane.
   * @param laneIndex index of the lane to get the total for.
   * @returns number
   */
  public getLaneTotal(laneIndex: number): number {
    return this.lanes[laneIndex].getTotal();
  }

  /**
   * Returns the total score across all lanes.
   * @returns number
   */
  public getTotal(): number {
    let total: number = 0;
    for (let i: number = 0; i < this.lanes.length; i++) {
      total += this.lanes[i].getTotal();
    }
    return total;
  }

  /**
   * Returns whether the game is busted.
   * @returns boolean
   */
  public isBusted(): boolean {
    for (let i: number = 0; i < this.lanes.length; i++) {
      if (this.lanes[i].isBusted()) {
        this.busted = true;
      }
      this.busted = false;
    }
    return this.busted;
  }
}
