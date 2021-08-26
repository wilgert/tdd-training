import { MarsRover } from './mars.rover';

describe('The Mars Rover', () => {
  it('should have a location', () => {
    let rover = new MarsRover([0, 0], 'South');
    expect(rover.getLocation()).toEqual([0, 0]);
  });

  it('should have a heading', () => {
    let rover = new MarsRover([4, 2]);
    expect(rover.getHeading()).toEqual('North');
  });

  it('should allow to be dropped at specific location', () => {
    let rover = new MarsRover([4, 2]);
    expect(rover.getLocation()).toEqual([4, 2]);
  });

  it('should allow to be dropped with a specific heading', () => {
    let rover = new MarsRover([0, 0], 'South');
    expect(rover.getHeading()).toEqual('South');
  });

  it('should turn right', () => {
    let rover = new MarsRover();
    rover.move('R');
    expect(rover.getHeading()).toEqual('East');
  });
});
