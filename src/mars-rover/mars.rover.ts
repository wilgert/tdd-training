type Heading = 'North' | 'East' | 'South' | 'West';
type Instruction = 'R' | 'L' | 'F' | 'B';

export class MarsRover {
  private x: number;
  private y: number;
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

  move(instruction: Instruction) {
    switch (instruction) {
      case 'R':
        this.heading = 'East';
        break;
      case 'L':
        this.heading = 'West';
        break;
      case 'F':
        this.y++;
        break;
      case 'B':
        this.y--;
        break;
    }
  }
}
