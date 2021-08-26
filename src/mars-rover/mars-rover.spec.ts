import { MarsRover } from './mars.rover';

describe('The Mars Rover', () => {
  it('should have a location', () => {
    let rover = new MarsRover([0, 0], 'North');
    expect(rover.getLocation()).toEqual([0, 0]);
  });

  it('should have a heading', () => {
    let rover = new MarsRover([4, 2], 'North');
    expect(rover.getHeading()).toEqual('North');
  });

  it('should allow to be dropped at specific location', () => {
    let rover = new MarsRover([4, 2], 'North');
    expect(rover.getLocation()).toEqual([4, 2]);
  });

  it('should allow to be dropped with a specific heading', () => {
    let rover = new MarsRover([0, 0], 'South');
    expect(rover.getHeading()).toEqual('South');
  });

  it('should turn right', () => {
    let rover = new MarsRover([0, 0], 'North');
    rover.move('R');
    expect(rover.getHeading()).toEqual('East');
  });

  it('should turn left', () => {
    let rover = new MarsRover([0, 0], 'North');
    rover.move('L');
    expect(rover.getHeading()).toEqual('West');
  });

  it('should move forward', () => {
    let rover = new MarsRover([0, 0], 'North');
    rover.move('F');
    expect(rover.getLocation()).toEqual([0, 1]);
  });

  it('should move backward', () => {
    let rover = new MarsRover([0, 0], 'North');
    rover.move('B');
    expect(rover.getLocation()).toEqual([0, -1]);
  });

  // it('should not move on invalid instructions', () => {
  //   let rover = new MarsRover([0, 0], 'North');
  //   rover.move('X');
  //   expect(rover.getLocation()).toEqual([0, 0]);
  // });
});
