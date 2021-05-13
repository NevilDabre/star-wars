
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

import { setMovieInfo, fetchMovieInfoFromApi } from '../redux/movies/actions'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 400
    },
}));

const ListOfMovies = ({ moviesList, setMovieInfo, isFetching }) => {
    const classes = useStyles();

    const handleMovieChange = async (event) => {
        const selectedMovieUrl = event.target.value;

        if (selectedMovieUrl && selectedMovieUrl !== '') {
            const movieInfo = await fetchMovieInfoFromApi(selectedMovieUrl);
            if (movieInfo) setMovieInfo(movieInfo)
        }
    }

    return (<div>{isFetching ? <CircularProgress /> : (<div>
        <FormControl fullWidth className={classes.formControl}>
            <InputLabel shrink id="simple-select-placeholder-label-label">
                Star Wars Movies
        </InputLabel>
            <Select
                multiline
                multiple
                native
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                className={classes.selectEmpty}
                displayEmpty
                MenuProps={{ className: classes.menu }}
                onChange={handleMovieChange}
            >
                {!moviesList && <option >Select a character to view movies</option>}
                {moviesList && moviesList.map((movie) => <option key={movie.title} value={movie.url}>{movie.title}</option>)}
            </Select>
        </FormControl>
    </div>)}
    </div>)
}

const mapStateToProps = (state) => ({
        moviesList: state.movies.moviesList,
        isFetching: state.characters.isFetching
    })

export default connect(mapStateToProps, { setMovieInfo })(ListOfMovies)
