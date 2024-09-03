export const ContenedorPokemon = ({ pokemon, nombre }) => {
    return (
        <>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <h1>{nombre}</h1>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="text-center m-3">
                    <h1>{pokemon.nombre}</h1>
                    <h1>{pokemon.id}</h1>
                    <img className="w-25" src={pokemon.image} alt={pokemon.nombre} />
                    
                </div>
            </div>
        </>
    );
};

