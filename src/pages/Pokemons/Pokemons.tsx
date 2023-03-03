import { useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import PokeModal from '../../components/PokeModal/PokeModal';
import PokeList from '../../components/PokeList/PokeList';
import PokePagination from '../../components/PokePagination/PokePagination';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getPokemons } from '../../redux/slices/pokemonSlice';
import { PokeContainer } from './Pokemons.styles';
import SearchBar from '../../components/SearchBar/SearchBar';

const Pokemons = () => {
  const status = useAppSelector((state) => state.pokemons.status);
  const page = useAppSelector((state) => state.pokemons.page);
  const count = useAppSelector((state) => state.pokemons.count);
  const limit = useAppSelector((state) => state.pokemons.limit);
  const chosenPokemon = useAppSelector((state) => state.pokemons.chosenPokemon);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = () => {
      const offset = (page - 1) * limit;
      dispatch(getPokemons({ limit, offset }));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const renderPage = () => {
    if (status === 'fulfilled') {
      return (
        <>
          <PokeList />
          {count && <PokePagination count={Math.ceil(count / limit)} />}
        </>
      );
    } if (status === 'loading') {
      return <CircularProgress color="secondary" />;
    }
    return (
      <div>Ooops, something went wrong</div>
    );
  };

  return (
    <PokeContainer maxWidth="lg">
      <SearchBar />
      {renderPage()}
      {chosenPokemon && <PokeModal />}
    </PokeContainer>
  );
};

export default Pokemons;
