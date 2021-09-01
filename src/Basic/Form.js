import { Container, FormControl, FormHelperText, Input, InputLabel, TextField } from '@material-ui/core'
import React from 'react'

const Form = () => {
    return (
        <Container>
            <form noValidate autoComplete="off">
                <TextField
                    variant="outlined"
                    label="Enter email address"
                    color="secondary"
                    fullWidth
                    required
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="outlined"
                />
                <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>

            </form>
        </Container>
    )
}

export default Form
