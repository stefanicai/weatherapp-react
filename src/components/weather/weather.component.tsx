import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../../actions";
import {CurrentWeather} from "../current-weather";
import {Grid} from "@material-ui/core";
import {DayForecast} from "../day-forecast";
import {useStyles} from "../styles";
import {getCurrentWeather, getDailyForecast, getError, getLocation, getWeatherUnits} from "../../app/selectors";
import {AlertTitle, Alert} from "@material-ui/lab";

interface Props {
}

export const Weather: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const location = useSelector(getLocation)
    const units = useSelector(getWeatherUnits)
    const error = useSelector(getError)

    const currentWeather = useSelector(getCurrentWeather)
    const dailyForecast = useSelector(getDailyForecast)

    React.useEffect(() => {
        if (location.lon !== '' && location.lat !== '') {
            dispatch(fetchWeather(location, units))
        }
    }, [location.lon, location.lat, units])
    return (
        <Grid container data-testid="weather-section">
            <Grid item xs={12} className={classes.section}>
                {currentWeather && <CurrentWeather {...currentWeather} />}
            </Grid>
            {error ?
                <Alert severity="error" data-testid="weather-error">
                    <AlertTitle>Oops, we couldn't find your location</AlertTitle>
                    {error}
                </Alert> :
            <Grid container justify="flex-start" spacing={2} className={classes.section}>
                {dailyForecast && dailyForecast.map(forecast => <DayForecast key={forecast.dt} {...forecast}/>)}
            </Grid>
            }
        </Grid>
    )
}