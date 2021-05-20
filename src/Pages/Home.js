import { Button, Paper } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pincode from './Pincode';
import District from './District';
import img from './images.jpg'

const Home = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
        //   flexGrow: 1,
        margin:"0",
        padding:"0",
          width: "100%",
          height:"91vh",
          backgroundImage:`url(${img})`,
          backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
        },
        paper:{
            width:"200px",
            height:'200px',
            textAlign:'center',
            padding:"40px",
            background:"rgba(255,255,255,0.4)",
            borderRadius:'10px',
            border:"0.01em solid rgba(255,255,255,0.4)",
            backdropFilter:'blur(5px)',
            fontSize:'2.5rem',
            color:'#2B2B52'
        }
      }));
      const classes = useStyles();
    return (
        <div className="Home">
        <div style={{textAlign:'center', marginTop:'0px', color:'#586776', fontSize:'3rem'}}>Welcome to vaccine search portal</div>
        <div style={{textAlign:'center', marginTop:'0px', color:'#586776', fontSize:'1.5rem'}}>by Rahul Nag</div>
        <Grid container  direction="row"
            justify="space-around"
            alignItems="center" className={classes.root} spacing={3}> 
            
            <Link style={{textDecoration:'none'}} to="/pincode">  
            <Grid item lg={12} >
            <Paper className={classes.paper} elevation={8}>
                SEARCH BY PINCODE
                
            </Paper> 
            
            </Grid>  
            </Link>


            <Link style={{textDecoration:'none'}} to="/district">
            <Grid item lg={12} >
            <Paper className={classes.paper} elevation={8}>
                SEARCH BY DISTRICT
            </Paper>
            </Grid>
            </Link>
        </Grid>
</div>
    );
};

export default Home;