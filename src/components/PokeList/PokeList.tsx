import { Grid } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import { IPokemon } from '../../interfaces';
import PokeCard from '../PokeCard/PokeCard';

const PokeList = () => {
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {pokemons?.map((pokemon: IPokemon) => (
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          md={6}
          lg={2.4}
          key={pokemon.id}
        >
          <PokeCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokeList;
