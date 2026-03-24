import { Box, InputAdornment, styled, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'

/** Matches reference: muted blue-grey frame + same weight as outer border */
const INPUT_FRAME_COLOR = '#9fb3c8'
const INPUT_FRAME_WIDTH = 2

const InputField = ({ startAdornment, label = "", endAdornment = "" }) => {


    const theme = useTheme();
    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                component="label"
                htmlFor="outlined-basic"
                variant="body1"
                sx={{
                    display: 'block',
                    mb: 1,
                }}
            >
                {label}
            </Typography>
            <TextField
                id="outlined-basic"
                size="small"
                error={true}
                variant="outlined"
                slotProps={{
                    input: {
                        startAdornment: startAdornment ? (
                            <StyledInputAdornment position="start" style={{ borderRight: `1px solid ${theme.palette.primary.light}` }}>
                                <Typography
                                    component="span"
                                    variant="body1"
                                    sx={{
                                        fontWeight: 900,
                                        color: theme.palette.text.salte300,
                                        lineHeight: 1,
                                        fontSize: '1rem',
                                    }}
                                >
                                    {startAdornment}
                                </Typography>
                            </StyledInputAdornment>
                        ) : null,
                        endAdornment: endAdornment ? (
                            <StyledInputAdornment position="end" style={{ borderLeft: `1px solid ${theme.palette.primary.light}` }}>
                                <Typography
                                    component="span"
                                    variant="body1"
                                    sx={{
                                        fontWeight: 900,
                                        color: theme.palette.text.salte300,
                                        lineHeight: 1,
                                        fontSize: '1rem',
                                    }}
                                >
                                    {endAdornment}
                                </Typography>
                            </StyledInputAdornment>
                        ) : null,
                    },
                }}
                type="number"
                autoComplete="off"
                inputProps={{
                    style: {
                        appearance: 'textfield',
                        color: theme.palette.text.primary,
                        fontWeight: 700,
                        MozAppearance: 'textfield',
                    },
                }}
                sx={(theme) => ({
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        paddingLeft: 0,
                        paddingRight: 0,
                        // backgroundColor: theme.palette.background.default,
                        borderRadius: "5px",
                        overflow: 'hidden',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: INPUT_FRAME_COLOR,
                        borderWidth: 1,
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#8aa3b8',
                        borderWidth: 1,
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'hsl(200, 24%, 40%)',
                        borderWidth: 1,
                    },
                    '& .MuiOutlinedInput-input': {
                        color: theme.palette.text.primary,
                        paddingLeft: theme.spacing(1.5),
                    },
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
                    {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                })}
            />
        </Box>
    )
}

export default InputField

const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
    margin: 0,
    height: 'auto',
    alignSelf: 'stretch',
    maxHeight: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minWidth: '2.75rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderRadius: 0,
    '& .MuiSvgIcon-root': {
        fontSize: '1.125rem',
    },
}))
