import { MarsRover } from './mars.rover';

describe('The Mars Rover', () => {
  it('should have a location', () => {
    let rover = new MarsRover();
    expect(rover.getLocation()).toEqual([0, 0]);
  });
});
