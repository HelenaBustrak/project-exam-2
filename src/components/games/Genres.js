import { useEffect } from "react";
import { Container } from "react-bootstrap";


export function Genres({setActiveGenre, activeGenre, setFilteredGames, games}){
    
    useEffect(function() {
        
        if(activeGenre === 0) {
            setFilteredGames(games);
            return;
        }


        const filteredGames = games.filter((game) => game.genres.includes(activeGenre));
        setFilteredGames(filteredGames);
    },[activeGenre])

    return(
        <Container className="genreContainer">
            <button className={activeGenre === 0 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(0)}>All Genres</button>
            <button className={activeGenre === 5 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(5)}>Shooter</button>
            <button className={activeGenre === 12 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(12)}>Role-playing (RPG)</button>
            <button className={activeGenre === 14 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(14)}>Sport</button>
            <button className={activeGenre === 31 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(31)}>Adventure</button>
            <button className={activeGenre === 32 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(32)}>Indie</button>
            <button className={activeGenre === 4 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(4)}>Fighting</button>
            <button className={activeGenre === 8 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(8)}>Platform</button>
            <button className={activeGenre === 13 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(13)}>Simulator</button>
            <button className={activeGenre === 24 ? "genreContainer__button genreContainer__active" : "genreContainer__button"} onClick={() => setActiveGenre(24)}>Tactical</button>
        </Container>
    )
}