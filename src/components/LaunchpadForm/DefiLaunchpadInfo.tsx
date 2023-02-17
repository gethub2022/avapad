import { DefiPoolSchema } from '@/functions/validators/pool';
import { ErrorMessage, Formik } from 'formik';
import moment from 'moment-timezone';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import {
  FormControlLabel,
  FormGroup,
  InputLabel,
  Switch,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';

const initialValues = {
  startTime: moment.utc(),
  endTime: moment.utc(),
  projectName: '',
  rate: '',
  tokensForSale: '',
  whitelist: false,
  levelsEnabled: false,
};
export default function DefiLaunchPadForm({
  handleBack,
  setPoolData,
  handleNext,
}) {
  const handleFormSubmit = (values) => {
    setPoolData(values);
    handleNext();
  };
  return (
    <Box p={4} className=" p-sidebar-card p-sidebar-card-steps">
      <Formik
        validationSchema={DefiPoolSchema}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          isSubmitting,
          handleSubmit,
          handleChange,
          values,
          errors,
          setValues,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div className="mt-1">
              <InputLabel>Project Name</InputLabel>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                name="projectName"
                placeholder="Project Name"
                onChange={handleChange}
                value={values.projectName}
                type="text"
                className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Error name="projectName" />
            </div>
            <Box mt={1}>
              <InputLabel>Token Name</InputLabel>

              <TextField
                sx={{ mt: 1 }}
                size="small"
                name="name"
                placeholder="Token Name"
                onChange={handleChange}
                value={values.name}
                className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Error name="name" />
            </Box>
            <Box mt={1}>
              <InputLabel>Token Symbol</InputLabel>

              <TextField
                sx={{ mt: 1 }}
                size="small"
                name="symbol"
                placeholder="Token Symbol"
                onChange={handleChange}
                value={values.symbol}
                className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Error name="symbol" />
            </Box>
            <Box mt={1}>
              <InputLabel>Rate (USD)</InputLabel>

              <TextField
                sx={{ mt: 1 }}
                size="small"
                name="rate"
                placeholder="Rate (USD)"
                onChange={handleChange}
                value={values.rate}
                type="number"
                className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Error name="rate" />
            </Box>
            <Box mt={1}>
              <InputLabel>Number of tokens To Sell</InputLabel>

              <TextField
                size="small"
                name="tokensForSale"
                placeholder="No Of tokens "
                onChange={handleChange}
                value={values.tokensForSale}
                type="number"
                className="block w-full mt-1 text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <Error name="tokensForSale" />
            </Box>
            <div className="mt-1">
              <label className="block w-full ">
                <span className="text-white"></span>

                <FormControlLabel
                  onChange={handleChange}
                  name="levelsEnabled"
                  control={<Switch value={values.levelsEnabled} />}
                  label="Enable Levels"
                />
                <FormControlLabel
                  name="whitelist"
                  onChange={handleChange}
                  control={<Switch value={values.whitelist} />}
                  label="Enable Whitelist"
                />
              </label>
            </div>
            <Box mt={1}>
              <InputLabel>Sale Start Time (UTC)</InputLabel>

              <Box mt={1}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    ampm={false}
                    value={values.startTime}
                    onChange={(value) =>
                      handleChange({
                        target: {
                          name: 'startTime',
                          value: moment(value).isValid()
                            ? moment.utc(value.format('YYYY-MM-DD HH:mm:ss'))
                            : value,
                        },
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        size="small"
                        sx={{
                          borderRadius: 2,
                        }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Error name="startTime" />
            </Box>
            <Box mt={1}>
              <InputLabel>Sale End Time(UTC)</InputLabel>

              <Box mt={1}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    ampm={false}
                    value={values.endTime}
                    onChange={(value) =>
                      handleChange({
                        target: {
                          name: 'endTime',
                          value: moment(value).isValid()
                            ? moment.utc(value.format('YYYY-MM-DD HH:mm:ss'))
                            : value,
                        },
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        fullWidth
                        sx={{
                          borderRadius: 2,
                        }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>

              <Error name="endTime" />
            </Box>
            <button className="mt-3 btn btn-primary btn-sm" type="submit">
              Next
            </button>
          </form>
        )}
      </Formik>
    </Box>
  );
}
export function Error(props) {
  return (
    <ErrorMessage {...props}>
      {(msg) => <div className="mt-1 text-xs text-red">{msg}</div>}
    </ErrorMessage>
  );
}
