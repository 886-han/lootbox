import type { PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: "#6366f1"
        }
    }
})

export default function ThemaProvider({children}: PropsWithChildren){
    return (
        <ThemeProvider theme={theme}> 
            {children}
        </ThemeProvider>
    )
}