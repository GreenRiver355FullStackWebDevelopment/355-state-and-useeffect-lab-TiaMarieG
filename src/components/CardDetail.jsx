const CardDetail = ({ poke }) => {
   return (
      <div className="card-detail">
         <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
         <img src={poke.sprites.front_default} alt={poke.name}/>
         <p>Height: {poke.height}</p>
         <p>Weight: {poke.weight}</p>
         <p>Type: {poke.types.map((type) => type.type.name).join(', ')}</p>
      </div>
   );
};
export default CardDetail;
