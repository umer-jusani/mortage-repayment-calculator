import {
  Container,
  Typography,
  Box,
  styled,
  Grid,
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
  const [result, setResult] = useState<number>(0);
  // const [error, setError] = useState<boolean>(false);

  const handleCalculateRepayments = () => {
    setFormState({ ...formState, submitError: true });

    if (
      !formState.mortageAmount ||
      !formState.mortageTerm ||
      !formState.interestRate ||
      !formState.mortageType
    ) {
      setResult(0);
      return;
    }

    const monthlyInterestRate = formState.interestRate / 100 / 12;
    const numberOfPayments = formState.mortageTerm * 12;
    const monthlyPayment =
      (formState.mortageAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setResult(monthlyPayment);
  };

  const handleClearAll = () => {
    setFormState({
      mortageAmount: 0,
      mortageTerm: 0,
      interestRate: 0,
    } as formState);
    setResult(0);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: 0,
          minHeight: { xs: "100dvh", md: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <StyledBox>
          {/* Calculator Section */}
          <Calculator>
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">Mortgage Calculator</Typography>
              <Typography
                variant="body1"
                onClick={handleClearAll}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                paddingTop={{ xs: 1, md: 0 }}
              >
                Clear All
              </Typography>
            </Box>
            <Grid container sx={{ my: 4 }} spacing={2}>
              <Grid size={12} component={Box}>
                <InputField
                  value={formState.mortageAmount}
                  label="Mortage Amount"
                  startAdornment="£"
                  error={
                    formState.submitError ? !formState.mortageAmount : false
                  }
                  onChange={(e: number) => {
                    setFormState({ ...formState, mortageAmount: e });
                    return e;
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField
                  value={formState.mortageTerm}
                  label="Mortage Term"
                  endAdornment="years"
                  error={formState.submitError ? !formState.mortageTerm : false}
                  onChange={(e: number) => {
                    setFormState({ ...formState, mortageTerm: e });
                    return e;
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} component={Box}>
                <InputField
                  value={formState.interestRate}
                  label="Interest Rate"
                  endAdornment="%"
                  error={
                    formState.submitError ? !formState.interestRate : false
                  }
                  onChange={(e: number) => {
                    setFormState({ ...formState, interestRate: e });
                    return e;
                  }}
                />
              </Grid>
              <Grid size={12} component={Box}>
                <RadioField
                  value={formState.mortageType || ""}
                  error={
                    formState.submitError
                      ? !Boolean(formState.mortageType)
                      : false
                  }
                  onChange={(value: "Repayment" | "Interest Only") => {
                    setFormState({ ...formState, mortageType: value });
                    return value;
                  }}
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
            {result > 0 ? (
              <>
                <Box>
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
                  <Typography variant="body1">
                    Your Monthly Repayments
                  </Typography>
                  <Typography variant="h3" mt={1}>
                    {result.toFixed(2)}
                  </Typography>
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="body1" mb={1}>
                    Total you will repay over the term
                  </Typography>
                  <Typography variant="h5" color="text.white">
                    {result.toFixed(2)}
                  </Typography>
                </SummaryCard>
              </>
            ) : (
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
            )}
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
