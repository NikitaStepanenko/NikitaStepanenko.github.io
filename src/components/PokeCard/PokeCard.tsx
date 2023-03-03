import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { openModal } from '../../redux/slices/pokemonSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import TypeBadge from '../TypeBadge/TypeBadge';
import { IPokemon, IType } from '../../interfaces/index';

interface PokeCardProps {
  pokemon: IPokemon;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const dispatch = useAppDispatch();
  const onClickCard = () => {
    dispatch(openModal(pokemon));
  };
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }} onClick={() => onClickCard()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.types.map((type: IType, index: number) => <TypeBadge key={index} type={type.type.name} />)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PokeCard;
