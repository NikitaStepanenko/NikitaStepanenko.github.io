import { getPokemonStat } from '../http/services/pokeService';
import { IPokemon, IPokemonWithoutStats } from '../interfaces';

export const getAllPokemonsWithStats = async (pokemons: IPokemonWithoutStats[]) => {
  const result: any = await Promise.all(pokemons.map(({ name }: {name: string}) => getPokemonStat(name)));
  return result.map((poke: {data: IPokemon}) => poke.data);
};
