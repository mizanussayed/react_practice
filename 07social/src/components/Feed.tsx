
import { Box} from "@mui/material"
import Posts from "./Posts"



const Feed = () => {

    return (
        <Box flex={5} p={2}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </Box>
    )
}

export default Feed