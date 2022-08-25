import './Movie.css';

function Moviecomp({ id, text, moviedelete }) {


    return (
        <div className="Moviecomp" >
            <span>{text}</span>
            <div className="movie-footer">
                <button id="deletebutton" onClick={() => moviedelete(id)}>Delete</button>
            </div>

        </div>

    )

};

export default Moviecomp;