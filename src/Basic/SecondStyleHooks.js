import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
    btn:{
        fontSize:30,
        backgroundColor:'orange',
        '&:hover':{
            backgroundColor:'orangered'
        }
    },
    title:{
        color:'lightgreen'
    }
})

const SecondStyleHooks = () => {
    const classes= useStyles()
    return (
        <Container>
             <Button className={classes.btn} variant="contained" color="secondary" startIcon={<SendOutlinedIcon/>} endIcon={<KeyboardArrowRightOutlinedIcon/>}>Send</Button>
             <br/>
             <Typography className={classes.title} variant="h2"> hello world</Typography>
            
        </Container>
    )
}

export default SecondStyleHooks
