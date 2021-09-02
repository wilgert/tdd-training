type Heading = 'North' | 'East' | 'South' | 'West';
type Instruction = 'R' | 'L' | 'F' | 'B';

export class MarsRover {
  private x: number;
  private y: number;

  private readonly compass: Heading[] = ['North', 'East', 'South', 'West'];
  private readonly reverseCompass: Heading[] = [...this.compass].reverse();

  constructor([x, y]: [number, number], private heading: Heading) {
    this.x = x;
    this.y = y;
  }

  getLocation(): [number, number] {
    return [this.x, this.y];
  }

  getHeading(): Heading {
    return this.heading;
  }

  move(instruction: string) {
    instruction.split('').forEach((instruction) => {
      this.instructionMap[instruction as Instruction]();
    });
  }

  private vectorMap: { [key in Heading]: { x: number; y: number } } = {
    North: { x: 0, y: 1 },
    East: { x: 1, y: 0 },
    South: { x: 0, y: -1 },
    West: { x: -1, y: 0 },
  };

  private instructionMap: { [key in Instruction]: () => void } = {
    R: () => this.turn(this.compass),
    L: () => {
      this.turn(this.reverseCompass);
    },
    F: () => {
      let { x, y } = this.vectorMap[this.heading];
      this.x += x;
      this.y += y;
    },
    B: () => {
      let { x, y } = this.vectorMap[this.heading];
      this.x -= x;
      this.y -= y;
    },
  };

  private turn(compass: Heading[]) {
    this.heading = compass[(compass.indexOf(this.heading) + 1) % 4];
  }
}
