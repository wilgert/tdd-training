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

  it.each`
    startHeading | instruction | expectedLocation
    ${'North'}   | ${'F'}      | ${[0, 1]}
    ${'East'}    | ${'F'}      | ${[1, 0]}
    ${'South'}   | ${'F'}      | ${[0, -1]}
    ${'West'}    | ${'F'}      | ${[-1, 0]}
    ${'North'}   | ${'FF'}     | ${[0, 2]}
    ${'North'}   | ${'B'}      | ${[0, -1]}
    ${'East'}    | ${'B'}      | ${[-1, 0]}
    ${'South'}   | ${'B'}      | ${[0, 1]}
    ${'West'}    | ${'B'}      | ${[1, 0]}
  `(
    '"$instruction" should move to $expectedLocation when heading $startHeading',
    ({ startHeading, instruction, expectedLocation }) => {
      let rover = new MarsRover([0, 0], startHeading);
      rover.move(instruction);
      expect(rover.getLocation()).toEqual(expectedLocation);
    }
  );

  it.each`
    startHeading | instruction | expectedHeading
    ${'North'}   | ${'R'}      | ${'East'}
    ${'West'}    | ${'R'}      | ${'North'}
    ${'North'}   | ${'RR'}     | ${'South'}
    ${'North'}   | ${'L'}      | ${'West'}
    ${'North'}   | ${'LL'}     | ${'South'}
    ${'East'}    | ${'LL'}     | ${'West'}
  `(
    '"$instruction" should turn from $startHeading to $expectedHeading',
    ({ startHeading, instruction, expectedHeading }) => {
      let rover = new MarsRover([0, 0], startHeading);
      rover.move(instruction);
      expect(rover.getHeading()).toEqual(expectedHeading);
    }
  );
});
