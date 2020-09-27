import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import playerRankings from '../fixtures/mixProfiles'

import ProfileCard from './ProfileCard'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textfield: {
    background: '#ffff'
  }
}));

// const filter = new Promise((res, rej)=>{

// })

export default function Profiles() {
    const [searchText, setSearchText] = useState('')
    const [players, setPlayers] = useState([])
    const classes = useStyles();
    const rawPlayers = playerRankings.slice(0,10);

  

    useEffect(()=>{
      async function filterPlayers(){
        const filteredPlayers = await playerRankings.filter((obj)=>{
          if(obj.player.name.toLowerCase().match(searchText.toLowerCase())){
              return true;
          }else {
              return false;
          }
        })
        if(!searchText) {
          setPlayers(rawPlayers);
        }else {
          setPlayers(filteredPlayers.slice(0,10));
        }
      }
      filterPlayers();
      console.log("should continue");
    }, [searchText])

    function handleSearchText(e){
      console.log("handle search text");
      setSearchText(e.target.value)
    }
  

  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid item >
          <TextField id="outlined-basic" label="enter profile name" variant="outlined" onChange={handleSearchText} className={classes.textfield}/>
        </Grid>
        <Grid item>
          <h4>Results: {players.length}</h4>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
      {players.map((o)=>{
          return <Grid item xs={12} sm={4}><ProfileCard {...o.player} rank={o.rank} points={o.points} key={o.player.id}/></Grid>
      })}
      </Grid>

    </>
  );
}
