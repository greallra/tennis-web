import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  avatar: {
    backgroundColor: red[500],
  },
  spanStyle: {
    background: 'rgb(255,0,0,0.1)', padding: '4px 8px', borderRadius: '50%', color: 'black', fontWeight: '900', fontSize: '13px'
  }
}));

export default function ProfileCard({id, name, nationality, rank, points}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [playerDetails, setPlayerDetails] = useState('')
  const [loadingPlayerDetails, setLoadingPlayerDetails] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  useEffect(()=>{
    async function getProfile(){
      try {
        setLoadingPlayerDetails(true)
        const id = 'sr:competitor:14882'
        let url = 'https://api.sportradar.us/tennis-t2/en/players/sr:competitor:14342/profile.xml?api_key=3xjrv5e9n8ckxu6cwvkhnj4h';
        const req = await axios.get(`http://localhost:3000/api/profile/${id}`)
        if(!req.data.data.error) {
          setPlayerDetails(req.data.data);
        }
        setLoadingPlayerDetails(false)
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    }
    if(expanded) getProfile();
    
  }, [expanded, expanded2])

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={nationality}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
        World Rank: <span className={classes.spanStyle}>{rank}</span>
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
        Points: <span className={classes.spanStyle}>{points}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{borderBottom: '1px solid #ededed'}}>
         {/* <IconButton aria-label="add to favorites">
          <Typography></Typography>
        </IconButton> */}
       {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography variant="subtitle1">Personal Details</Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {!playerDetails ? 'loading': 
        <CardContent>
          <Typography paragraph>Date of birth: <span className={classes.spanStyle}>{playerDetails.player.date_of_birth}</span></Typography>
          <Typography paragraph>Turned Pro: <span className={classes.spanStyle}>{playerDetails.player.pro_year}</span></Typography>
          <Typography paragraph>Turned Pro: <span className={classes.spanStyle}>{playerDetails.player.weight}</span></Typography>
          <Typography paragraph>Turned Pro: <span className={classes.spanStyle}>{playerDetails.player.height}</span></Typography>
          <Typography paragraph>Handedness: <span className={classes.spanStyle}>{playerDetails.player.handedness}</span></Typography>
        </CardContent>
        }
      </Collapse>
      <CardActions disableSpacing>
         {/* <IconButton aria-label="add to favorites">
          <Typography></Typography>
        </IconButton> */}
       {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <Typography variant="subtitle1">2020 Statistics</Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded2} timeout="auto" unmountOnExit>
        {!playerDetails ? 'loading': 
            <CardContent>
              <Typography paragraph>Tournaments Played: <span className={classes.spanStyle}>{playerDetails.statistics.periods[0].statistics.tournaments_played}</span></Typography>
              <Typography paragraph>Tournaments Won: <span className={classes.spanStyle}>{playerDetails.statistics.periods[0].statistics.tournaments_won}</span></Typography>
              <Typography paragraph>Matches Played: <span className={classes.spanStyle}>{playerDetails.statistics.periods[0].statistics.matches_played}</span></Typography>
              <Typography paragraph>Matches Won: <span className={classes.spanStyle}>{playerDetails.statistics.periods[0].statistics.matches_won}</span></Typography>
            </CardContent>
        }
      </Collapse>
    </Card>
  );
}
