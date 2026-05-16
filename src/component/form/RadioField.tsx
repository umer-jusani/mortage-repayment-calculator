import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled, useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function RadioField({
  value: valueFormState,
  onChange,
  error,
}: {
  value: "Repayment" | "Interest Only";
  onChange: (value: "Repayment" | "Interest Only") => void;
  error?: boolean;
}) {
  const [value, setValue] = React.useState("");
  const theme = useTheme();
  console.log(error, "error");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "event.target.value");
    onChange(event.target.value as "Repayment" | "Interest Only");
    setValue(event.target.value);
  };

  React.useEffect(() => {
    setValue(valueFormState || "");
  }, [valueFormState]);

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel>
        <Typography variant="body1">Mortage Type</Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{
          gap: "10px",
          marginTop: "9px",
        }}
      >
        <StyledFormControlLabel
          checked={value === "Repayment" ? true : false}
          value="Repayment"
          control={<Radio />}
          label="Repayment"
        />
        <StyledFormControlLabel
          checked={value === "Interest Only" ? true : false}
          value="Interest Only"
          control={<Radio />}
          label="Interest Only"
        />
      </RadioGroup>
      {error && (
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.75rem",
            marginTop: 1,
            marginInline: 2,
            fontWeight: "500",
          }}
          color={theme.palette.background.error}
        >
          This field is required.
        </Typography>
      )}
    </FormControl>
  );
}

const StyledFormControlLabel = styled(FormControlLabel)(
  ({ theme, checked }) => ({
    margin: "0px",
    width: "100%",
    ...(checked && {
      backgroundColor: "rgba(250, 250, 226, 1)",
      border: `1px solid ${theme.palette.primary.main}`,
    }),
    ...(!checked && {
      "& .MuiSvgIcon-root": {
        fill: "#9fb3c8",
      },
      border: `1px solid #9fb3c8`,
    }),
    "& .MuiFormControlLabel-root": {
      marginLeft: "0px",
    },
    "& .MuiTypography-body1": {
      color: theme.palette.text.primary,
      fontWeight: 700,
    },
  }),
);
