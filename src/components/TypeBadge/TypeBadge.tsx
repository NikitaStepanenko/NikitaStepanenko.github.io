import { Chip } from '@mui/material';

const allTypes = {
  normal: '#d9d9d9',
  fighting: '#d56723',
  flying: '#abd3ec',
  poison: '#b97fc9',
  ground: '#ab9842',
  rock: '#a38c21',
  bug: '#719f3f',
  ghost: '#7b62a3',
  steel: '#acaaaa',
  fire: '#fd7d24',
  water: '#4592c4',
  grass: '#47ab57',
  electric: '#eed535',
  psychic: '#f366b9',
  ice: '#92b8d09e',
  dragon: '#f06d56',
  dark: '#000',
  fairy: '#33f251',
  shadow: '#323030'
};

const TypeBadge = ({ type }: { type: string }) => (
  <Chip label={type} sx={{ bgcolor: allTypes[type as keyof typeof allTypes], marginRight: '5px' }} />

);

export default TypeBadge;
