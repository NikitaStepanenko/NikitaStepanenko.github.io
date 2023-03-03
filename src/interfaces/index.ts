
export interface IAbility {
  ability: {
    name: string;
    url: string;
  },
  isHidden: boolean;
  slot: number;
}

export interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface IStat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface IPokemon {
  abilities: IAbility[];
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: IStat[];
  types: IType[];
}

export interface IPokemonWithoutStats {
  name: string;
  url: string;
}

export interface IPokeWithoutStatsResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonWithoutStats[];
}

