import { Box, Typography } from "@mui/material";

const CardDetail = ({ poke }) => {
	return (
		<Box
			sx={{
				backgroundColor: "#e0e0e0",
				color: "#333",
				borderRadius: 3,
				paddingTop: 4,
            paddingBottom: 4,
            mt: 5,
				maxWidth: "300px",
				mx: "auto",
			}}
		>
			<Typography variant='h5' sx={{color: '#b89b2b'}}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</Typography>

			<img src={poke.sprites.front_default} alt={poke.name} />

			<Typography sx={{pt: 2}}>Height: {poke.height}</Typography>

			<Typography sx={{pt: 2}}>Weight: {poke.weight}</Typography>

			<Typography sx={{pt: 2}}>
				Type: {poke.types.map((type) => type.type.name).join(", ")}
			</Typography>
		</Box>
	);
};
export default CardDetail;
