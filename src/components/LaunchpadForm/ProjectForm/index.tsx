import { Error } from '@/components/FormikError';
import { ProjectInfoSchema } from '@/functions/validators/pool';
import {
  Box,
  Button,
  Card,
  Grid,
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';

const initialValues = {
  logoUrl: '',
  website: '',
  facebook: '',
  twitter: '',
  instagram: '',
  github: '',
  linkedin: '',
  discord: '',
  description: '',
  telegram: '',
  reddit: '',
};
export default function ProjectForm({
  handleNext,
  handleBack,
  setProjectData,
}) {
  const handleFormSubmit = (values) => {
    setProjectData(values);
    handleNext();
  };
  return (
    <Box>
      <Card
        sx={{ mt: 6, backgroundColor: '#212529', boxShadow: 'none' }}
        className="p-sidebar-card p-sidebar-card-steps"
      >
        <Box p={3}>
          <Typography variant="caption" color="primary.dark">
            (*) is required field.
          </Typography>
          <Box mt={1}>
            <Formik
              validationSchema={ProjectInfoSchema}
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
                isValid,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Logo URL*</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="logoUrl"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.logoUrl}
                        />
                        <Error name="logoUrl" />
                        <Typography
                          variant="caption"
                          color="blue"
                          lineHeight={'2px'}
                        >
                          URL must end with a supported image extension png,
                          jpg, jpeg or gif.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Website*</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="website"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.website}
                        />
                        <Error name="website" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Facebook</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="facebook"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.facebook}
                        />
                        <Error name="facebook" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Twitter</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="twitter"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.twitter}
                        />
                        <Error name="twitter" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Github</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="github"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.github}
                        />
                        <Error name="github" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Telegram</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="telegram"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.telegram}
                        />
                        <Error name="telegram" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Instagram</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="instagram"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.instagram}
                        />
                        <Error name="instagram" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <InputLabel>Discord</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="discord"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.discord}
                        />
                        <Error name="discord" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Box>
                        <InputLabel>Reddit</InputLabel>
                        <TextField
                          sx={{ mt: 0.5 }}
                          size="small"
                          fullWidth
                          name="reddit"
                          placeholder="Ex: htps://...."
                          onChange={handleChange}
                          value={values.reddit}
                        />
                        <Error name="reddit" />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt={2} sx={{ '&>textarea': { borderRadius: '4px' } }}>
                    <InputLabel>Description</InputLabel>
                    <TextareaAutosize
                      className="w-full mt-1 bg-transparent"
                      name="description"
                      placeholder="Enter Project Description"
                      onChange={handleChange}
                      value={values.description}
                      minRows={3}
                    />
                  </Box>

                  <Box display="flex" justifyContent="center" mt={2}>
                    <Box>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={handleBack}
                      >
                        Back
                      </button>
                      {console.log(errors)}
                      <button
                        style={{ marginLeft: '10px' }}
                        className="btn btn-sm btn-primary"
                        type="submit"
                      >
                        Next
                      </button>
                    </Box>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
