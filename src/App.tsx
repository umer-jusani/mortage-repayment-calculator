import {
  Container,
  Typography,
  Box,
  styled,
  Grid,
  TextField,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import "./App.css";
import InputField from "./component/form/InputField";
import RadioField from "./component/form/RadioField";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useState } from "react";
import mortgageCalculator from "./assets/images/illustration-empty.svg";

interface formState {
  mortageAmount: number;
  mortageTerm: number;
  interestRate: number;
  mortageType: "Repayment" | "Interest Only";
  submitError?: boolean;
}

function App() {
  const [formState, setFormState] = useState<formState>({
    mortageAmount: 0,
    mortageTerm: 0,
    interestRate: 0,
    mortageType: "Repayment",
    submitError: false,
  });
  // const [error, setError] = useState<boolean>(false);

  console.log(formState);

  const handleCalculateRepayments = () => {
    setFormState({ ...formState, submitError: true });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: "0px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledBox>
          {/* Calculator Section */}
          <Calculator>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">Mortgage Calculator</Typography>
              <Typography variant="body1" sx={{ textDecoration: "underline" }}>
                Clear All
              </Typography>
            </Box>
            <Grid container sx={{ my: 4 }} spacing={2}>
              <Grid size={12} component={Box}>
                <InputField
                  label="Mortage Amount"
                  startAdornment="£"
                  error={
                    formState.submitError ? !formState.mortageAmount : false
                  }
                  onChange={(e: number) =>
                    setFormState({ ...formState, mortageAmount: e })
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField
                  label="Mortage Term"
                  endAdornment="years"
                  error={formState.submitError ? !formState.mortageTerm : false}
                  onChange={(e: number) =>
                    setFormState({ ...formState, mortageTerm: e })
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField
                  label="Interest Rate"
                  endAdornment="%"
                  error={
                    formState.submitError ? !formState.interestRate : false
                  }
                  onChange={(e: number) =>
                    setFormState({ ...formState, interestRate: e })
                  }
                />
              </Grid>
              <Grid size={12} component={Box}>
                <RadioField
                  error={formState.submitError ? !formState.mortageType : false}
                  onChange={(value: "Repayment" | "Interest Only") =>
                    setFormState({ ...formState, mortageType: value })
                  }
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<CalculateIcon />}
              onClick={handleCalculateRepayments}
            >
              Calculate Repayments
            </Button>
          </Calculator>

          {/* Results Section */}
          <Results>
            {/* Results */}
            {/* <Box>
              <Typography variant="h5" color="text.white" mb={2}>
                Your results
              </Typography>
              <Typography variant="body1" color="#92aec1">
                Your results are shown below based on the information you
                provided. To adjust the results, eidt the form and click
                "calculaterepayments" again.
              </Typography>
            </Box>

            <SummaryCard mt={4}>
              <Typography variant="body1">Your Monthly Repayments</Typography>
              <Typography variant="h3" mt={1}>
                £1,77.74
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body1" mb={1}>
                Total you will repay over the term
              </Typography>
              <Typography variant="h5" color="text.white">
                £539,322.94
              </Typography>
            </SummaryCard> */}

            {/* Heading */}
            <Box
              sx={{
                height: "100%",
                display: "flex",
                gap: 2,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <img
                src={mortgageCalculator}
                alt="Mortgage Calculator"
                style={{
                  objectFit: "contain",
                  minWidth: "50%",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography variant="h5" color="text.white">
                Results shown here
              </Typography>
              <Typography variant="body1">
                Complete the form and click "Calculate repayments" to see what
                your monthly repayments woudld be.
              </Typography>
            </Box>
          </Results>
        </StyledBox>
      </Container>
    </>
  );
}

export default App;

const StyledBox = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "stretch",
  padding: "0px",
  flexWrap: "wrap",
  backgroundColor: theme.palette.background.white,
  overflow: "hidden",
  display: "block",
  [theme.breakpoints.up("md")]: {
    borderRadius: theme.spacing(3),
    display: "flex",
  },
}));

const Calculator = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.white,
  padding: theme.spacing(4),
  overflow: "hidden",
  flex: 1,
}));

const Results = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  padding: theme.spacing(4),
  flex: 1,
  [theme.breakpoints.up("md")]: {
    borderBottomLeftRadius: theme.spacing(8),
  },
}));

const SummaryCard = styled(Box)(({ theme }) => ({
  padding: "20px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 2px 12px 0px rgba(44, 58, 99, 0.10)", // subtle box shadow for lift
  borderRadius: theme.shape.borderRadius,
  borderTop: `4px solid ${theme.palette.primary.main}`,
}));
