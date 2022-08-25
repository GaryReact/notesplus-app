

const SearchBar = ({SearchMovie}) => {
    return(
        <div className="search">
            <input type="text" size="100" placeholder="Search Movies" onChange={(event)=> SearchMovie(event.target.value)}></input>
        </div>

    );

};

export default SearchBar;