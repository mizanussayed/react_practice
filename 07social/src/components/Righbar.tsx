import { Box } from "@mui/material"



const Righbar = () => {
    return (
        <Box
        bgcolor="green"
            flex={2}
            p={2} sx={{ display: { xs: "none", sm: "block" } }}
        >Righbar</Box>
    )
}

export default Righbar