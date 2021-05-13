import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

import Characters from './Characters'
import ListOfMovies from './ListOfMovies'
import NameYearMovie from './NameYearMovie'

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
    },
    image: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.image}
                    image="https://cdn57.androidauthority.net/wp-content/uploads/2020/05/star-wars-movies-for-free-1.jpg"
                    title="Star Wars character Image"
                />
                <CardContent>
                    <Characters />
                    <ListOfMovies />
                    <NameYearMovie />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
