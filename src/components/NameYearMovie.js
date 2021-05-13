import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const NameYearMovie = ({ movieInfo, isFetching }) => {
    const classes = useStyles();
    const [movieNameYear, setMovieNameYear] = useState();

    useEffect(() => {
        if (movieInfo) {
            const year = (new Date(movieInfo.release_date)).getFullYear();
            const title = movieInfo.title;
            setMovieNameYear(`${title} - ${year}`);
        }else setMovieNameYear('');
    }, [movieInfo])
    return (<div>{isFetching ? <CircularProgress /> :
        <TextField fullWidth className={classes.textField} disabled id="standard-basic"
            InputLabelProps={{ shrink: true }}
            label="Name/Year last Movie:" defaultValue={''} value={movieNameYear} autoFocus />}
    </div>

    );
}

const mapStateToProps = (state) => ({
    movieInfo: state.movies.movieInfo,
    isFetching: state.characters.isFetching
})

export default connect(mapStateToProps, {})(NameYearMovie)

