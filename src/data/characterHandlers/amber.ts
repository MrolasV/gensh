import { Stat, StatMap } from "data/stats";
import { Character } from "./character";
import { CharacterId } from "data/characters";
import amberIcon from 'pngs/portraits/amber.png';

export default class CharacterAmber extends Character {
  characterId = (): CharacterId => {
    return CharacterId.AMBER;
  }

  icon = (): string => {
    return amberIcon;
  }

  characterStats = (): StatMap[] => {
    throw null;
  }
}