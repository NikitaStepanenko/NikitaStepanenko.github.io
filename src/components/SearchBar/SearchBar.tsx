import React, { useState } from 'react';
import { TextField, useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getPokemons, searchPokemon } from '../../redux/slices/pokemonSlice';
import { StyledButton, StyledForm } from './SearchBar.styles';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pokemons.page);
  const limit = useAppSelector((state) => state.pokemons.limit);

  const [name, setName] = useState('');

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const onSubmitSearch = () => {
    if (name) {
      dispatch(searchPokemon(name));
    } else {
      const offset = (page - 1) * limit;
      dispatch(getPokemons({ limit, offset }));
    }
  };

  return (
    <StyledForm onSubmit={onSubmitSearch}>
      <TextField
        id="outlined-password-input"
        placeholder="name"
        autoComplete="current-password"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      {isSmallScreen || <StyledButton variant="contained" type="submit">Search</StyledButton>}
    </StyledForm>
  );
};

export default SearchBar;
