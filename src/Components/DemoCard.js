import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    background: "rgba(0,0,0,0.3)",
  },
  media: {
    height: 600,
    borderRadius:'7%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Gugi, cursive',
  },
  description: {
    color: 'white',
    textAlign: 'center'
  },
  cardWrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20vh',
  }
});

export default function DemoCard() {
  const classes = useStyles();

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.15752-9/151134810_138769574768568_3525932765235975315_n.jpg?_nc_cat=103&ccb=3&_nc_sid=ae9488&_nc_ohc=n0LA7Z1Mi6wAX9P3sSA&_nc_ht=scontent.fphx1-2.fna&oh=c2c1aabe00ba0f601c332dc4a27250a7&oe=6056FCAD"
          title="mobile-demo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
          Vitreous Demo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            Web conferencing application where online lectures and meetings are hosted
          </Typography>
        </CardContent>
    </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1608202478316-69bd79acbc51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk4fHxleWV8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="mobile-demo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            Eye Tracker Demo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            Web demo showing how Vitreous tracks the users sight and how user can interact with lectures
          </Typography>
        </CardContent>
    </Card>

    
    </div>
    
  );
}
