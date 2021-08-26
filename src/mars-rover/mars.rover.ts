export class MarsRover {
  constructor(
    private location: [number, number] = [0, 0],
    private heading: 'North' | 'East' | 'South' | 'West' = 'North'
  ) {}

  getLocation(): [number, number] {
    return this.location;
  }

  getHeading() {
    return this.heading;
  }
}
