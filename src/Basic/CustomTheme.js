import React from 'react'
import { Button, Container, createMuiTheme,ThemeProvider, Typography } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'


const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#fefefe'
        },
        secondary:purple
    }

})

const CustomTheme = () => {
    return (
        <Container>
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">Hello World</Button>
            <Typography color="secondary">Welcome to Custom Theme in material UI</Typography>
        </ThemeProvider>
        </Container>
    )
}

export default CustomTheme
