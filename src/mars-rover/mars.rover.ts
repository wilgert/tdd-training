type Heading = 'North' | 'East' | 'South' | 'West';

export class MarsRover {
  constructor(private location: [number, number], private heading: Heading) {}

  getLocation(): [number, number] {
    return this.location;
  }

  getHeading(): Heading {
    return this.heading;
  }

  move(instruction: 'R' | 'L') {
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
