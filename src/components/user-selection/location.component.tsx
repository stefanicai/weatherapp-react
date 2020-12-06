import * as React from 'react'
import lowerCase from 'lodash/lowerCase'
import toStartCase from 'lodash/startCase'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import {Box, Button, Grid} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {fetchLocation} from "../../actions"

export const LocationSelector: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <Box data-testid="location-section">
            <Formik
                initialValues={{location: 'London'}}
                validateOnChange={true}
                validateOnBlur={true}
                validationSchema={Yup.object().shape({location: Yup.string().required()})}
                onSubmit={async ({location}, {setSubmitting}) => {
                    await dispatch(fetchLocation(toStartCase(lowerCase(location))))
                    setSubmitting(false)
                }}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item>
                            <label htmlFor="location">Location</label>
                            <Field id="location" name="location" placeholder="Location"/>
                            <ErrorMessage component="div" name="location"/>
                        </Grid>
                        <Grid item>
                            <Button data-testid="location-submit" type="submit" variant="contained" color="primary">Change Location</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
    )
}