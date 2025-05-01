const CardDetail = ({ poke }) => {
   return (
      <div className="card-detail">
         <h2>{poke.name}</h2>
         <p>Height: {poke.height}</p>
         <p>Weight: {poke.weight}</p>
         <p>Type: {poke.types}</p>
      </div>
   );
};
export default CardDetail;
