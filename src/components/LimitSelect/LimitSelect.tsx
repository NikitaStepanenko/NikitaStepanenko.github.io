import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeLimit } from '../../redux/slices/pokemonSlice';

const LimitSelect = () => {
  const limit = useAppSelector((state) => state.pokemons.limit);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeLimit(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120, marginLeft: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Limit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={`${limit}`}
          label="Limit"
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LimitSelect;
