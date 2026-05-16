import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
  useTheme,
  type Theme,
} from "@mui/material";

/** Matches reference: muted blue-grey frame + same weight as outer border */
const INPUT_FRAME_COLOR = "#9fb3c8";

interface InputFieldProps {
  value: number;
  startAdornment?: string;
  label: string;
  endAdornment?: string;
  onChange: (value: number) => number;
  error: boolean;
}

const InputField = ({
  value: valueFormState,
  startAdornment,
  label,
  endAdornment,
  onChange,
  error,
}: InputFieldProps) => {
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component="label"
        htmlFor="outlined-basic"
        variant="body1"
        sx={{
          display: "block",
          mb: 1,
        }}
      >
        {label}
      </Typography>
      <TextField
        placeholder={""}
        value={valueFormState || ""}
        id="outlined-basic"
        size="medium"
        error={error}
        onChange={handleChange}
        // error={true}
        helperText={error ? "This field is required." : ""}
        FormHelperTextProps={{
          sx: {
            fontWeight: "500",
          },
        }}
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: startAdornment ? (
              <StyledInputAdornment
                theme={theme}
                position="start"
                style={{
                  borderRight: `1px solid ${theme.palette.primary.light}`,
                }}
                state={error ? "error" : "default"}
              >
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    fontWeight: 900,
                    color: error
                      ? theme.palette.text.white
                      : theme.palette.text.primary,
                    lineHeight: 1,
                    fontSize: "1rem",
                  }}
                >
                  {startAdornment}
                </Typography>
              </StyledInputAdornment>
            ) : null,
            endAdornment: endAdornment ? (
              <StyledInputAdornment
                theme={theme}
                position="end"
                style={{
                  borderLeft: `1px solid ${theme.palette.primary.light}`,
                }}
                state={error ? "error" : "default"}
              >
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    fontWeight: 900,
                    color: error
                      ? theme.palette.text.white
                      : theme.palette.text.primary,
                    lineHeight: 1,
                    fontSize: "1rem",
                  }}
                >
                  {endAdornment}
                </Typography>
              </StyledInputAdornment>
            ) : null,
          },
        }}
        // type="number"
        autoComplete="off"
        inputProps={{
          style: {
            appearance: "textfield",
            color: theme.palette.text.primary,
            fontWeight: 700,
            MozAppearance: "textfield",
          },
        }}
        sx={(theme) => ({
          width: "100%",
          "& .MuiOutlinedInput-root": {
            paddingLeft: 0,
            paddingRight: 0,
            // backgroundColor: theme.palette.background.default,
            borderRadius: "5px",
            overflow: "hidden",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: INPUT_FRAME_COLOR,
            borderWidth: 1,
          },
          ":focus-within .MuiInputAdornment-root": {
            backgroundColor: error ? theme.palette.background.error : "#e6e672",
            outline: "none",
          },

          // "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          //   borderColor: "#8aa3b8",
          //   borderWidth: 1,
          // },
          // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          //   {
          //     borderColor: "hsl(200, 24%, 40%)",
          //     bo rderWidth: 1,
          //   },
          "& .MuiOutlinedInput-input": {
            color: theme.palette.text.primary,
            paddingLeft: theme.spacing(1.5),
          },
          "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
            {
              WebkitAppearance: "none",
              margin: 0,
            },
        })}
      />
    </Box>
  );
};

export default InputField;

const StyledInputAdornment = styled(InputAdornment)(({ theme, state }: { theme: Theme, state: "error" | "default" }) => ({
  margin: 0,
  height: "auto",
  alignSelf: "stretch",
  maxHeight: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minWidth: "2.75rem",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  backgroundColor:
    state === "error"
      ? theme.palette.background.error
      : theme.palette.background.default,
  ":active": {
    backgroundColor: "yellow",
  },
  borderRadius: 0,
  "& .MuiSvgIcon-root": {
    fontSize: "1.125rem",
  },
}));
