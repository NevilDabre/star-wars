
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

import { setCharactersList, fetchCharactersFromApi, setIsFetching } from '../redux/characters/actions'
import { setMoviesList, setMovieInfo, fetchMovieInfoFromApi } from '../redux/movies/actions'

const CharactersComponent = ({ setCharactersList, charactersList, setMoviesList, setMovieInfo, setIsFetching }) => {
    const classes = useStyles();
    const [charactersInfoList, setCharactersInfoList] = useState();

    const getCharactersList = async () => {
        setIsFetching(true);
        const result = await fetchCharactersFromApi();
        if (result && result.length) {
            setCharactersList(result);
            setMovieInfo('');
        }
    }
    useEffect(() => {
        getCharactersList();
    }, []);

    useEffect(() => {
        if (charactersList && charactersList.length) setCharactersInfoList(charactersList);
    }, [charactersList]);

    const handleCharacterChange = async (event) => {
        setIsFetching(true);
        const selectedCharacter = event.target.value;
        const moviesList = [];
        if(selectedCharacter.films && selectedCharacter.films.length) {

            await Promise.all(selectedCharacter.films.map(async url=>{ 
                const result = await fetchMovieInfoFromApi(url);
                moviesList.push(result);
            }));
            moviesList.sort((a, b) => a.release_date - a.release_date);
            if(moviesList && moviesList.length) setMovieInfo(moviesList[moviesList.length -1])
        } 
        setIsFetching(false);
        setMoviesList(moviesList);
    }
    return (<div>
        <FormControl fullWidth className={classes.formControl}>
            <InputLabel shrink id="character-heading-label">
                Star Wars Characters
        </InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                className={classes.selectEmpty}
                displayEmpty
                onChange={handleCharacterChange}
            >
                {!charactersInfoList && <MenuItem >Select a character</MenuItem>}
                {charactersInfoList && charactersInfoList.map(character => <MenuItem value={character}>{character.name}</MenuItem>)}
            </Select>
        </FormControl>
    </div>)
}

const mapStateToProps = (state) => ({
    charactersList: state.characters.charactersList,
})

export default connect(mapStateToProps, { setCharactersList, setMoviesList, setMovieInfo, setIsFetching })(CharactersComponent)