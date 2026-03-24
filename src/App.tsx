import { Container, Typography, Box, styled, Grid, TextField, useTheme, Button, Divider } from '@mui/material'
import './App.css'
import InputField from './component/form/InputField'
import RadioField from './component/form/RadioField';
import CalculateIcon from '@mui/icons-material/Calculate';

function App() {
  // maxWidth="xl" sx={ { display: "flex", justifyContent: "center", alignItems: "center", padding: "0px", flexWrap: "wrap" }}
  const theme = useTheme();

  return (
    <>
      <Container sx={{ padding: "0px", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <StyledBox>

          <Calculator>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h5">
                Mortgage Calculator
              </Typography>
              <Typography variant="body1" sx={{ textDecoration: "underline" }}>
                Clear All
              </Typography>
            </Box>
            <Grid container sx={{ my: 4 }} spacing={2}>
              <Grid size={12} component={Box}>
                <InputField label="Mortage Amount" startAdornment="£" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField label="Mortage Term" endAdornment="years" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField label="Interest Rate" endAdornment="%" />
              </Grid>
              <Grid size={12} component={Box}>
                <RadioField />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" size='small' startIcon={<CalculateIcon />}>Calculate Repayments</Button>
          </Calculator>

          <Results>
            <Box>
              <Typography variant="h5" color='text.white' mb={2}>
                Your results
              </Typography>
              <Typography variant="body1" color='#92aec1'>
                Your results are shown below based on the information you provided. To adjust the results, eidt the form and click "calculaterepayments" again.
              </Typography>
            </Box>

            <SummaryCard mt={4}>
              <Typography variant="body1">
                Your Monthly Repayments
              </Typography>
              <Typography variant="h3" mt={1}>
                £1,77.74
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body1" mb={1}>
                Total you will repay over the term
              </Typography>
              <Typography variant="h5" color='text.white'>
                £539,322.94
              </Typography>
            </SummaryCard>
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
  alignItems: "stretch",
  padding: "0px",
  flexWrap: "wrap",
});

const SummaryCard = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 12px 0px rgba(44, 58, 99, 0.10)", // subtle box shadow for lift
  borderRadius: theme.shape.borderRadius,
  borderTop: `4px solid ${theme.palette.primary.main}`,
}));

const Calculator = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(4),
  borderTopLeftRadius: theme.spacing(4),
  borderBottomLeftRadius: theme.spacing(4),
  flex: 1,
}));

const Results = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  padding: theme.spacing(4),
  flex: 1,
}));
