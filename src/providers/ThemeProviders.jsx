import React from 'react'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme();

export default function MUIThemeProviders({ children }) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
