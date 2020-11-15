import { Character } from "./character";
import { CharacterId } from "data/characters";
import travelerIcon from 'pngs/portraits/traveler.png';
import { Stat, StatMap } from "data/stats";

export default class CharacterTraveler extends Character {
  characterId = (): CharacterId => { return CharacterId.TRAVELER; }
  icon = (): string => { return travelerIcon; }

  characterStats = (): StatMap[] => {
    return [
      new Map([ //a0s
        [ Stat.HEALTH, 912 ],
        [ Stat.ATTACK, 18 ],
        [ Stat.DEFENSE, 57 ],
        [ Stat.ATTACK_PCT, 0 ]
      ]), new Map([ //a0e
        [ Stat.HEALTH, 2342 ],
        [ Stat.ATTACK, 46 ],
        [ Stat.DEFENSE, 147 ],
        [ Stat.ATTACK_PCT, 0 ]
      ]), new Map([ //a1s
        [ Stat.HEALTH, 3024 ],
        [ Stat.ATTACK, 60 ],
        [ Stat.DEFENSE, 190 ],
        [ Stat.ATTACK_PCT, 0 ]
      ]), new Map([ //a1e
        [ Stat.HEALTH, 4529 ],
        [ Stat.ATTACK, 88 ],
        [ Stat.DEFENSE, 284 ],
        [ Stat.ATTACK_PCT, 0 ]
      ]), new Map([ //a2s
        [ Stat.HEALTH, 5013 ],
        [ Stat.ATTACK, 98 ],
        [ Stat.DEFENSE, 315 ],
        [ Stat.ATTACK_PCT, 6 ]
      ]), new Map([ //a2e
        [ Stat.HEALTH, 5766 ],
        [ Stat.ATTACK, 112 ],
        [ Stat.DEFENSE, 362 ],
        [ Stat.ATTACK_PCT, 6 ]
      ]), new Map([ //a3s
        [ Stat.HEALTH, 6411 ],
        [ Stat.ATTACK, 126 ],
        [ Stat.DEFENSE, 405 ],
        [ Stat.ATTACK_PCT, 12 ]
      ]), new Map([ //a3e
        [ Stat.HEALTH, 7164 ],
        [ Stat.ATTACK, 140 ],
        [ Stat.DEFENSE, 450 ],
        [ Stat.ATTACK_PCT, 12 ]
      ]), new Map([ //a4s
        [ Stat.HEALTH, 7648 ],
        [ Stat.ATTACK, 149 ],
        [ Stat.DEFENSE, 480 ],
        [ Stat.ATTACK_PCT, 12 ]
      ]), new Map([ //a4e
        [ Stat.HEALTH, 8401 ],
        [ Stat.ATTACK, 164 ],
        [ Stat.DEFENSE, 527 ],
        [ Stat.ATTACK_PCT, 12 ]
      ]), new Map([ //a5s
        [ Stat.HEALTH, 8885 ],
        [ Stat.ATTACK, 174 ],
        [ Stat.DEFENSE, 558 ],
        [ Stat.ATTACK_PCT, 18 ]
      ]), new Map([ //a5e
        [ Stat.HEALTH, 9638 ],
        [ Stat.ATTACK, 188 ],
        [ Stat.DEFENSE, 605 ],
        [ Stat.ATTACK_PCT, 18 ]
      ]), new Map([ //a6s
        [ Stat.HEALTH, 10122 ],
        [ Stat.ATTACK, 198 ],
        [ Stat.DEFENSE, 635 ],
        [ Stat.ATTACK_PCT, 24 ]
      ]), new Map([ //a6e
        [ Stat.HEALTH, 10875 ],
        [ Stat.ATTACK, 213 ],
        [ Stat.DEFENSE, 682 ],
        [ Stat.ATTACK_PCT, 24 ]
      ]),
    ]
  }
}