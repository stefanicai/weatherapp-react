import React from 'react'
import {UserSelection} from "../user-selection";
import {Grid} from "@material-ui/core";
import {Weather} from "../weather";
import {useStyles} from "../styles";

export const Root: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid data-testid="root-section" className={classes.root}>
            <Grid container className={classes.section}>
                <UserSelection/>
            </Grid>
            <Grid container justify="flex-start" className={classes.section}>
                <Weather/>
            </Grid>
        </Grid>
    )
}