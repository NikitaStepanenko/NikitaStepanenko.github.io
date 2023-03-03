import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IPokemon, IPokeWithoutStatsResponse } from '../../interfaces';
import { getAllPokemonsWithStats } from '../../helpers/getAllPokemonsWithStats';
import { getPokeList, getPokemonStat } from '../../http/services/pokeService';

export interface IState {
  pokemons: IPokemon[] | null;
  status: 'fulfilled' | 'loading' | 'rejected';
  errorMessage: string;
  count: number;
  page: number;
  limit: number;
  chosenPokemon: IPokemon | null;
}

const initialState: IState = {
  pokemons: null,
  status: 'loading',
  errorMessage: '',
  count: 0,
  page: 1,
  limit: 10,
  chosenPokemon: null
};

export const getPokemons = createAsyncThunk(
  'pokemons/getPokemons',
  async (req: {
    limit: number,
    offset: number
  }) => {
    const { data }:AxiosResponse<IPokeWithoutStatsResponse> = await getPokeList(req);
    const { count } = data;
    const result: IPokemon[] = await getAllPokemonsWithStats(data.results);
    return { result, count };
  }
);

export const searchPokemon = createAsyncThunk(
  'pokemons/searchPokemon',
  async (name: string) => {
    const { data } = await getPokemonStat(name);
    return { data };
  }
);

const pokemonSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
    openModal: (state, action) => {
      state.chosenPokemon = action.payload;
    },
    closeModal: (state) => {
      state.chosenPokemon = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.rejected, (state) => {
      state.status = 'rejected';
      state.errorMessage = 'Reject Response';
    });
    builder.addCase(getPokemons.fulfilled, (state, { payload }) => {
      state.pokemons = payload.result;
      state.count = payload.count;
      state.status = 'fulfilled';
    });
    builder.addCase(getPokemons.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(searchPokemon.rejected, (state) => {
      state.status = 'rejected';
      state.errorMessage = 'Reject Response';
    });
    builder.addCase(searchPokemon.fulfilled, (state, { payload }) => {
      state.pokemons = [payload.data];
      state.count = 1;
      state.page = 1;
      state.status = 'fulfilled';
    });
    builder.addCase(searchPokemon.pending, (state) => {
      state.status = 'loading';
    });
  }
});

export const { changePage, changeLimit, openModal, closeModal } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
