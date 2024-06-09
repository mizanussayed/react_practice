import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Righbar from "./components/Righbar"
import { Box, Stack } from "@mui/material"
import Navbar from "./components/Navbar"


function App() {


  return (
    <Box>
      <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Righbar />
        </Stack>
    </Box>
  )
}

export default App
