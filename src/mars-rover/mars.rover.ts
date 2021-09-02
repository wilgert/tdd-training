type Heading = 'North' | 'East' | 'South' | 'West';
type Instruction = 'R' | 'L' | 'F' | 'B';

export class MarsRover {
  private x: number;
  private y: number;

  private headings: Heading[] = ['North', 'East', 'South', 'West'];

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
    R: () =>
      (this.heading =
        this.headings[(this.headings.indexOf(this.heading) + 1) % 4]),
    L: () => {
      let nextHeading = this.headings.indexOf(this.heading) - 1;
      this.heading = this.headings[nextHeading === -1 ? 3 : nextHeading];
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
}
