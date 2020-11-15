import { StatMap } from '../stats';
import { CharacterId } from 'data/characters';
import { getAscensionLevelRange } from 'data/characterUtil';

export abstract class Character {
  abstract characterId (): CharacterId;
  abstract icon (): string;
  abstract characterStats (): StatMap[]; //length 14
  
  getStatsAtLevel = (level: number, ascension: number): StatMap | null => {
    const levelRange = getAscensionLevelRange(ascension);
    if (!levelRange.contains(level)) {
      return null;
    }
    const stats = this.characterStats();
    if (stats.length !== 14) {
      return null;
    }
    const t = (level - levelRange.min) / (levelRange.max - levelRange.min);
    return this.interpolateStats(t, stats[ascension * 2], stats[ascension * 2 + 1]);
  }

  lerp = (t: number, min: number, max: number): number => {
    if (max === min) return min;
    return t * (max - min) + min;
  }

  interpolateStats = (t: number, min: StatMap, max: StatMap): StatMap => {
    const minStats = Array.from(min);
    const stats: StatMap = new Map();
    minStats.forEach(([ stat, value ]) => {
      const minVal = value;
      const maxVal = max.get(stat) as number;
      stats.set(stat, this.lerp(t, minVal, maxVal));
    });
    return stats;
  }
}