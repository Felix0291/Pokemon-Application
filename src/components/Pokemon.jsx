let Pokemon = ({ data }) => {
    return (
        <div className="pokemonContainer">

            <h2>Namn: {data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
            <h3>Typ/Typer: {data.types.map((e) => e.type.name.charAt(0).toUpperCase() + e.type.name.slice(1)).join(', ')}</h3>
            <h3>Vikt: {data.weight / 10} kg</h3>
            <h3>Längd: {data.height / 10} m</h3>
        
        </div>
    );
};

export default Pokemon

