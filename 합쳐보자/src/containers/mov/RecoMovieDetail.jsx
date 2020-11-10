import React , {useCallback ,useEffect, useState} from 'react'
import axios from 'axios'
import {RecoMovie} from '../../templates'
import {context as c} from '../../context'

import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DayoungAppBar from './DayoungAppBar';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    width: '100%',
    maxWidth: '2000px'
  },
  card: {
    height: '100%',
    // padding: '100px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    paddingTop: '150%', // 16:9
    // fontsize: ''
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1,2,3,4,5,6,7];

export default function RecoMovieDetail() {
  const classes = useStyles();

  const [data, setData] = useState([])
  useEffect(() => {
      axios.get(`http://127.0.0.1:8080/api/recomovies`)
      .then(res=>{
          alert(`List Success`)
          setData(res.data)
      })
      .catch(e=>{
          alert(`List Failure`)
          throw(e)
      })

  },[])
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,]
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
        <DayoungAppBar></DayoungAppBar>
      <main>
        {/* Hero unit */}
        <div>
        <Container className={classes.cardGrid}> 
          {/* End hero unit */}
          <Grid container spacing={3}>
            {data.map((i, index) => (
              <Grid item key={index} xs={12} sm={6} md={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={i.image_naver}
                    title={i.title_kor}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {/* {i} # i.title */}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>  
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}