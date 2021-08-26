export class MarsRover {
  constructor(private location: [number, number] = [0, 0]) {}

  getLocation(): [number, number] {
    return this.location;
  }

  getHeading() {
    return 'North';
  }
}
