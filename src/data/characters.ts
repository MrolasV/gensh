import { Character } from "./characterHandlers/character";
import CharacterAmber from "./characterHandlers/amber";
import CharacterTraveler from "./characterHandlers/traveler";

export enum CharacterId {
  AMBER = 'amber',
  TRAVELER = 'traveler',
}

export const characters = new Map<CharacterId, Character>([
  [CharacterId.AMBER, new CharacterAmber()],
  [CharacterId.TRAVELER, new CharacterTraveler()],
]);