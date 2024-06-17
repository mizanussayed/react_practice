import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Righbar from "./components/Righbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Navbar from "./components/Navbar"
import { Add } from "./components/Add"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar  setMode={setMode} mode ={mode}/>
          <Feed />
          <Righbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
