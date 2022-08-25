import Moviecomp from "./Movie";
import AddMovie from "./AddMovie";
import './Movie.css';

function Moviescomp({ movie, changemovie, moviedelete }) {
    return (
        <div className="Moviescomp">
            {movie.map((eachmovie) => <Moviecomp id={eachmovie.id} text={eachmovie.moviename} moviedelete={moviedelete} />)}
            <AddMovie changemovie={changemovie} />
        </div>

    )

};

export default Moviescomp;