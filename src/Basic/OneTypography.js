import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, ButtonGroup, Container } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const OneTypography = () => {
    return (
        <Container>
        <Typography>
            hello world
        </Typography>
        <Typography variant="h1" color="primary">
            hello world
        </Typography>
        <Typography variant="h2" color="secondary">
            hello world
        </Typography>
        <Typography variant="h3" align="center">
            hello world
        </Typography>
        <Typography variant="h4">
            hello world
        </Typography>

        <Typography noWrap>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem laborum labore, similique molestias asperiores modi iste facere molestiae est consectetur quibusdam ullam provident commodi veritatis? Nam quidem quos aut sapiente accusantium quisquam in dicta, ipsa quis fuga optio minima repudiandae ab accusamus eos, voluptas consequuntur officiis perferendis, obcaecati nobis veniam voluptates asperiores ut nisi? Sint fuga dolore id rem rerum sit libero fugit laboriosam, facilis mollitia quidem, ipsum ex inventore dolorem harum. Quos, ea! Rerum laboriosam perspiciatis modi quibusdam! Fuga, placeat iure numquam, sunt reiciendis quis incidunt asperiores ad eveniet unde repudiandae ducimus ullam consequuntur, in vitae explicabo repellendus!

        </Typography>
         <Button type="submit">Submit</Button>
         <Button variant="contained" color="secondary">one</Button>
         <ButtonGroup variant="outlined" color="primary">
             <Button >Two</Button>
             <Button> <HomeIcon color="action" fontSize="small"/></Button>
         </ButtonGroup>
         {/* icons */}
         <br/>
         <HomeIcon/>
         <HomeIcon color="secondary" fontSize="large"/>
         <HomeIcon color="action" fontSize="small"/>
         <HomeIcon color="error" fontSize="small"/>
         <HomeIcon color="disabled" fontSize="large"/>
         <br/>
         <Button variant="contained" color="secondary" startIcon={<SendOutlinedIcon/>} endIcon={<KeyboardArrowRightOutlinedIcon/>}>Send</Button>
        </Container>
    )
}

export default OneTypography
