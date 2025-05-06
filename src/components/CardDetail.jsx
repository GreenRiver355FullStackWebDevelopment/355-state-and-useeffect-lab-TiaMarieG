import { Box, Typography } from '@mui/material';

const CardDetail = ({ poke }) => {
   return (
      <Box className="card-detail">
         <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>

         <img src={poke.sprites.front_default} alt={poke.name}/>

         <Typography>Height: {poke.height}</Typography>

         <Typography>Weight: {poke.weight}</Typography>

         <Typography>Type: {poke.types.map((type) => type.type.name).join(', ')}</Typography>
      </Box>
   );
};
export default CardDetail;
