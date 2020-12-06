import * as React from "react";
import {Grid} from "@material-ui/core";
import {LocationSelector} from "./location.component";
import {UnitsSelector} from "./units.component";

export const UserSelection: React.FC = () => {
    return (
        <Grid container spacing={6}>
            <Grid item>
                <LocationSelector/>
            </Grid>
            <Grid item>
                <UnitsSelector/>
            </Grid>
        </Grid>
    )
}