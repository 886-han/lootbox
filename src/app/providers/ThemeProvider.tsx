import type { PropsWithChildren } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: "dark",
    },
})

export default function ThemaProvider({children}: PropsWithChildren){
    return (
        <ThemeProvider theme={theme}> 
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}