import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'

const GridDemo = () => {
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}><Paper elevation={6}>hello</Paper></Grid>
            <Grid item xs={12} md={6} lg={3}><Paper elevation={3}>hello</Paper></Grid>
            <Grid item xs={12} md={6} lg={3}><Paper elevation={8}>hello</Paper></Grid>
            <Grid item xs={12} md={6} lg={3}><Paper>hello</Paper></Grid>

        </Grid>
            
        </Container>
    )
}

export default GridDemo
