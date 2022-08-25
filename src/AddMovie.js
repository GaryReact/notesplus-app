import { useState } from 'react';

function AddMovie({ changemovie }) {
    const [movietext, setmovietext] = useState("");

    const changemovietext = (event) => {
        setmovietext(event.target.value)
    }

    const addmovietext = () => {
        if (movietext.trim().length > 0){
            changemovie(movietext);
            setmovietext("");
        }
        
    }



    return (

        <div className="Moviecomp new">
            <textarea rows="1" cols="8" placeholder="Type Movie Name" onChange={changemovietext} value={movietext}></textarea>
            <div className="movie-footer">
                <button className="add" onClick={addmovietext}>Add</button>
            </div>

        </div>

    )

};

export default AddMovie;