import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material"
import { themeSettings } from '@/theme';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

const theme = createTheme(themeSettings("dark"));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App