import Range from 'common/range';

export const getAscensionLevelRange = (ascension: number): Range => {
  switch (ascension) {
    case 0: return new Range(1, 20);
    case 1: return new Range(20, 40);
    case 2: return new Range(40, 50);
    case 3: return new Range(50, 60);
    case 4: return new Range(60, 70);
    case 5: return new Range(70, 80);
    default: return new Range(80, 90);
  }
}