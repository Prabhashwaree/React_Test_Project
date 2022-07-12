import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import GDSEButton from "../../components/common/Button";
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
               
            ]
        }
    }


    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.nav_bar}>
                    <Grid>
                        <div className={classes.nav_title}>
                            <Typography variant="h4">
                                 POS System
                            </Typography>
                        </div>
                        <div className={classes.nav_btn}>
                            <Link to="/customer">
                                <GDSEButton size="small" variant="contained" label="Customer"
                                            onClick={() => {

                                            }}
                                            style={{marginLeft: '15px',marginTop:'50px'}}
                                />
                            </Link>
                            <Link to="/item">
                                <GDSEButton size="small" variant="contained" label="Item"
                                            onClick={() => {

                                            }}
                                            style={{marginLeft: '15px',marginTop:'50px'}}
                                />
                            </Link>


                            <GDSEButton size="small" variant="contained" label="Order"
                                        onClick={() => {

                                        }}
                                        style={{marginLeft: '15px',marginTop:'50px'}}
                            />
                        </div>
                    </Grid>
                </div>

                <div className={classes.load_container}>
                    <div className={classes.card}>
                        <Grid item lg={12} md={6} sm={6} xm={6}>
                            <Card variant="outlined" sx={{maxWidth: 400}}>

                                <CardHeader
                                    title="Customer Manage"
                                    subheader="July 11, 2022"
                                />
                                <CardMedia
                                  component="img"
                                  height="100"
                                  image=""
                                  alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="h2" color="text.secondary">
                                        05
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>

                    </div>

                    
                    <div className={classes.card}>

                        <Grid item lg={12} md={6} sm={6} xm={6}>
                            <Card variant="outlined" sx={{maxWidth: 400}}>
                                <CardHeader
                                    title="Item Manage"
                                    subheader="July 11, 2022"
                                />
                                <CardMedia
                                   component="img"
                                   height="100"
                                   image="/static/images/cards/paella.jpg"
                                   alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="h2" color="text.secondary">
                                       06
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>


                    <div className={classes.card}>

                        <Grid item lg={12} md={6} sm={6} xm={6}>
                            <Card variant="outlined" sx={{maxWidth: 400}}>
                                <CardHeader
                                    title="Order Manage"
                                    subheader="July 11, 2022"
                                />
                                <CardMedia
                                   component="img"
                                   height="100"
                                   image="/static/images/cards/paella.jpg"
                                   alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="h2" color="text.secondary">
                                        12
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styleSheet)(Home)