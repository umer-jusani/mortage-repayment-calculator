import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function RadioField() {
    const [value, setValue] = React.useState('female');
    const theme = useTheme();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    // Hint 1: Notice how your current styling is always applied, regardless of which radio is selected.
    // Hint 2: You want to only apply the yellow(ish) styling when the option is selected ("active" can mean checked).

    // Reasoning: Instead of having both options always show the yellow background/border,
    // conditionally apply those styles only to the currently-selected value.

    return (
        <FormControl sx={{ width: "100%" }}>
            <FormLabel>
                <Typography variant="body1">
                    Mortage Type
                </Typography>
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
        </FormControl>
    );
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme, checked }) => ({
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
    }
}));
