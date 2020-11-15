import { CharacterId } from "data/characters";
import { GenshinElement } from "data/genshin";

export interface Build {
  id: string;
  label: string;
  characterId: CharacterId;
  characterElement: GenshinElement;
  characterAscension: number;
  characterLevel: number;
}

export const defaultBuild: Build = {
  id: '',
  label: 'New build',
  characterId: CharacterId.TRAVELER,
  characterElement: GenshinElement.ANEMO,
  characterAscension: 0,
  characterLevel: 1,
}