import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from "@mui/material"
import { red } from "@mui/material/colors"


const Posts = () => {
    return (
            <Card sx={{m:5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Final exem of Isdb"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/288439636_3398553160431335_3897489866221848528_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2jqMfrKb7ToQ7kNvgECBw5c&_nc_ht=scontent.fdac24-3.fna&oh=00_AYBSqr0-OGAg_OuvMEye3lfwisDvB13iXBWl0bC-30r-5w&oe=666BE086"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />}  checkedIcon={<Favorite sx={{color: "red"}} />}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Posts;