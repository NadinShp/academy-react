import Movie from './Movie';
export default function MovieList({movies}) {
    return(
        // <ul>
        //     {movies.map(movie => (
        //         <li key={movie}><Movie movie={movie} /></li>
        //     ))}
        // </ul>
        <Movie />
    )
}