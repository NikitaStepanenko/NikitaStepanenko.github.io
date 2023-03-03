import {
  Button,
  Dialog,
  DialogActions,
  Typography,
  DialogContent,
  DialogContentText,
  Grid,
  DialogTitle
} from '@mui/material';
import { IAbility, IStat, IType } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { closeModal } from '../../redux/slices/pokemonSlice';
import TypeBadge from '../TypeBadge/TypeBadge';

const PokeModal = () => {
  const chosenPokemon = useAppSelector((state) => state.pokemons.chosenPokemon);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  if (!chosenPokemon) {
    handleClose();
    return null;
  }

  return (
    <div>
      <Dialog
        open={!!chosenPokemon}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {chosenPokemon.name} {chosenPokemon.types.map((type: IType, index: number) => <TypeBadge key={index} type={type.type.name} />)}
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ md: 3 }}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <img
                height="200"
                width="200"
                src={chosenPokemon.sprites.front_default}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={8}
            >
              {chosenPokemon.stats.map((stat: IStat) => (
                <Grid
                  item
                  xs={6}
                >{stat.stat.name}: {stat.base_stat}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <DialogContentText>
            <Typography>Abilities:</Typography>
            {chosenPokemon.abilities.map((ability: IAbility, index: number) => (
              <Typography key={index}>{ability.ability.name} </Typography>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PokeModal;
