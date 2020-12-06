This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## How to run

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The code has my `keyid` so you don't need to request one. You can just clone it and run it as is.

### `yarn test`
To run tests

## Comments

- I haven't written tests for components where they would be pretty similar. I'm guessing that it's not supposed to be production ready, but rather a sample of code style.
- Formik or Yup weren't really necessary for this test, but I started with that and left it as is. Unfortunately it doesn't seem to not work well with material-ui, so the form fields look a bit off.
- The store states and the data coming from the API are the same. That made sense in this case, as the types are pretty clean. If we'd need more of the fields or data would look different, it could be that we'd need to have different models/types for the store than the ones returned by the API call.
- The service requires two calls to get the data. I initially tried with MetaWeather as it doesn't require a key, but that doesn't seem to work (anymore?). I'm sure there might be others that can do the job with one call. Or the premium version might do too.
- Some data is not available with OpenWeatherMap (e.g. pollen). I've replaced it with weather description.

### `Could improve`

- The API key could be moved to a config reducer which would be populated when the page loads. That enables having different configs per environment without having to build one bundle per environment. It speeds up CI, compared with using environment variables. Both options are ok really, depends on how CI is setup and how critical performance is there.
- Logging could be added to help with testing in non-prod environments, though DevTools should generally be enough.
- Test coverage can be improved. E.g. I haven't tested selectors at all, or if the UI is responsive. Those could be tested in unit tests.
- I'd probably drop Formik. It depends on what the full application would look like.