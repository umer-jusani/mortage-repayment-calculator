import { Container, Typography, Box, styled, Grid, TextField, useTheme } from '@mui/material'
import './App.css'
import InputField from './component/form/InputField'
import RadioField from './component/form/RadioField';

function App() {
  // maxWidth="xl" sx={ { display: "flex", justifyContent: "center", alignItems: "center", padding: "0px", flexWrap: "wrap" }}
  const theme = useTheme();

  return (
    <>
      <Container sx={{ padding: "0px" }}>
        <StyledBox>

          <Calculator>

            <Box>
              <Typography variant="h5">
                Mortgage Calculator
              </Typography>z
              <Typography variant="body1">
                Clear All
              </Typography>
            </Box>

            <Grid container sx={{ mt: 4 }} spacing={2}>
              <Grid size={12} component={Box}>
                <InputField label="Mortage Amount" startAdornment="£" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField label="Mortage Term" endAdornment="years" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField label="Interest Rate" endAdornment="%" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <RadioField />
              </Grid>
            </Grid>



          </Calculator>

          <Results>

          </Results>




        </StyledBox>
      </Container>
    </>
  )
}

export default App


const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  flexWrap: "wrap"
})

const Calculator = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(4),
}));

const Results = styled(Box)({
})
