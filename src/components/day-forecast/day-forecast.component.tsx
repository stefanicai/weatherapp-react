import * as React from 'react'
import {DailyForecast} from "../../types";
import {Box, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        temp: {
            padding: theme.spacing(0, 1)
        },
    })
)

export const DayForecast: React.FC<DailyForecast> = (forecast) => {
    const classes = useStyles()
    const description = forecast.weather[0].description
    const iconName = forecast.weather[0].icon
    const {min, max} = forecast.temp
    const options = {weekday: 'long'}
    const dateString = new Date(forecast.dt * 1000).toLocaleDateString('en-AU', options)

    return (
        <Grid item data-testid={"day-forecast-" + forecast.dt}>
            <Grid container>
                    <Grid item>
                        <Typography>{dateString}</Typography>
                    </Grid>
                    <Grid container direction="column">
                        <Grid item>
                            <img
                                src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
                                width={100}
                                height={100}
                                alt={`${description} icon`}
                            />
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                <Typography noWrap className={classes.temp}>{min}°</Typography>
                                <Typography noWrap className={classes.temp}>{max}°</Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            {description}
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}