import React from 'react';
import { Pagination, useMediaQuery } from '@mui/material';
import { changePage } from '../../redux/slices/pokemonSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { StyledBox } from './PokePagination.styles';
import LimitSelect from '../LimitSelect/LimitSelect';

interface PokePaginationProps {
  count: number;
}

const PokePagination = ({ count }: PokePaginationProps) => {
  const page = useAppSelector((state) => state.pokemons.page);
  const dispatch = useAppDispatch();

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const onPageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    event.preventDefault();
    dispatch(changePage(newPage));
  };
  console.log(isSmallScreen);
  return (
    <StyledBox sx={{ flexDirection: isSmallScreen ? 'column-reverse' : 'row' }}>
      <Pagination
        defaultPage={isSmallScreen ? 1 : 10}
        siblingCount={isSmallScreen ? 0 : 1}
        onChange={onPageChange}
        page={page}
        count={count}
        variant="outlined"
        color="secondary"
      />
      <LimitSelect />
    </StyledBox>
  );
};

export default PokePagination;
