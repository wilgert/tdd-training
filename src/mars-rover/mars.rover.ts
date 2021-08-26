type Heading = 'North' | 'East' | 'South' | 'West';
type Instruction = 'R' | 'L';

export class MarsRover {
  constructor(private location: [number, number], private heading: Heading) {}

  getLocation(): [number, number] {
    return this.location;
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
    }
  }
}
