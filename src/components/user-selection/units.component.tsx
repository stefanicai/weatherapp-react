import * as React from "react"
import {useDispatch, useSelector} from "react-redux"
import {Field, Form, Formik} from "formik"
import {setWeatherUnits} from "../../reducers/weather-slice"
import {Box, Button, Grid} from "@material-ui/core"
import {getWeatherUnits} from "../../app/selectors"

export const UnitsSelector: React.FC = () => {
    const dispatch = useDispatch()
    const units = useSelector(getWeatherUnits)
    return (
        <Box data-testid="units-section">
            <Formik
                initialValues={{units: units}}
                onSubmit={async ({units}, {setSubmitting}) => {
                    await dispatch(setWeatherUnits(units))
                    setSubmitting(false)
                }}
            >
                <Form>
                    <Grid container spacing={2} >
                    <Grid item>
                        <label htmlFor="units">Units</label>
                        <Field as="select" name="units" data-testid="units-select">
                            <option value="metric">Metric</option>
                            <option value="imperial">Imperial</option>
                        </Field>
                    </Grid>
                    <Grid item>
                        <Button data-testid="units-submit" type="submit" variant="contained" color="primary">Change units</Button>
                    </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
    )
}