export enum Stat {
  ATTACK = 'Attack',
  HEALTH = 'Health',
  DEFENSE = 'Defense',
  EM = 'Elemental mastery',
  MS = 'Movement speed',
  C_RATE = 'Crit rate',
  C_DMG = 'Crit damage',
  ER = 'Energy recharge',
  CD = 'Reduce CD',
  SHIELD = 'Powerful shield',
  HEAL_BONUS = 'Healing bonus',
  INC_HEAL = 'Incoming healing',
  PHYS_DMG = 'Physical DMG bonus',
  PHYS_RES = 'Physical RES',
  PYRO_DMG = 'Pyro DMG bonus',
  PYRO_RES = 'Pyro RES',
  HYDRO_DMG = 'Hydro DMG bonus',
  HYDRO_RES = 'Hydro RES',
  DENDRO_DMG = 'Dendro DMG bonus',
  DENDRO_RES = 'Dendro RES',
  ELECTRO_DMG = 'Electro DMG bonus',
  ELECTRO_RES = 'Electro RES',
  ANEMO_DMG = 'Anemo DMG bonus',
  ANEMO_RES = 'Anemo RES',
  CRYO_DMG = 'Cryo DMG bonus',
  CRYO_RES = 'Cryo RES',
  GEO_DMG = 'Geo DMG bonus',
  GEO_RES = 'Geo RES',
  ATTACK_PCT = 'Attack %',
  HEALTH_PCT = 'Health %',
  DEFENSE_PCT = 'Defense %',
}

export type StatMap = Map<Stat, number>;