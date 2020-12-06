import * as React from "react";
import {CurrentWeatherInfo} from "../../types";
import {Grid, Typography, useMediaQuery} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getLocation, getWeatherUnits} from "../../app/selectors";

export const CurrentWeather: React.FC<CurrentWeatherInfo> = (info) => {
    const location = useSelector(getLocation)
    const units = useSelector(getWeatherUnits)
    const isLargeScreen = useMediaQuery("(min-width:600px)")
    const isMetric = units === 'metric'
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    const dateString = new Date(info.dt * 1000).toLocaleDateString('en-AU', options)
    const iconName = info.weather[0].icon
    const description = info.weather[0].description

    return (
        <Grid container spacing={2} alignItems="center" data-testid="current-weather-section">
            <Grid item xs={isLargeScreen ? 6 : 12}>
                <Typography variant="h2">{location.name}</Typography>
                <Typography variant="h6">{dateString}</Typography>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <img
                            src={`http://openweathermap.org/img/wn/${iconName}@2x.png`}
                            width={100}
                            alt={`${description} icon`}
                        />
                    </Grid>
                    <Grid item>
                        <Typography>{info.temp}{String.fromCharCode(isMetric ? 8451 : 8457)}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={isLargeScreen ? 6 : 12}>
                <Typography>Humidity: {info.humidity}%</Typography>
                <Typography>Pressure: {info.pressure} hPa</Typography>
                <Typography>Wind speed: {info.wind_speed} {isMetric ? "mps" : "mph"}</Typography>
            </Grid>
        </Grid>
    )
}