import { AxiosResponse } from 'axios';
import { IPokeWithoutStatsResponse } from '../../interfaces';
import api from '../api/base';

export const getPokeList = (req: {limit: number, offset: number}):Promise<AxiosResponse<IPokeWithoutStatsResponse>> => api.get('/pokemon', {
  params: { ...req }
});

export const getPokemonStat = (name: string) => api.get(`/pokemon/${name}`);
