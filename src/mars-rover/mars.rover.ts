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
      this.processInstruction(instruction as Instruction);
    });
  }

  private processInstruction(instruction: Instruction) {
    switch (instruction) {
      case 'R':
        this.heading =
          this.headings[(this.headings.indexOf(this.heading) + 1) % 4];
        break;
      case 'L':
        let nextHeading = this.headings.indexOf(this.heading) - 1;
        this.heading = this.headings[nextHeading === -1 ? 3 : nextHeading];
        break;
      case 'F':
        switch (this.heading) {
          case 'North':
            this.y++;
            break;
          case 'East':
            this.x++;
            break;
          case 'South':
            this.y--;
            break;
          case 'West':
            this.x--;
            break;
        }
        break;
      case 'B':
        switch (this.heading) {
          case 'North':
            this.y--;
            break;
          case 'East':
            this.x--;
            break;
          case 'South':
            this.y++;
            break;
          case 'West':
            this.x++;
            break;
        }
    }
  }
}
