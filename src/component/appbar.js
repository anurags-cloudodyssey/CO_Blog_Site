import React from "react";
import Avatar from '@mui/material/Avatar';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


export default function Appbar() {

  const handleClick = () => {
    alert("Your inbox is empty...");
  }
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>
              |
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button href="#" color="inherit" sx={{ color: '#fff' }}>
               HOME
              </Button>
              <Button href="#" color="inherit" sx={{ color: '#fff' }}>
                Notes
              </Button>
              <Button href="#" color="inherit" sx={{ color: '#fff' }}>
                Blog
              </Button>
            </Box>
            <Typography 
            variant="h6" 
            component="div" 
            edge="start"
            sx={{ flexGrow: 1 }}>

            </Typography>
            <Button color="inherit">
            <Badge color="secondary" variant="dot">
                  <MailIcon onClick={handleClick} />
              </Badge>
            </Button>
            <Button color="inherit"><Avatar alt="Anurag Singh" src="https://media-exp1.licdn.com/dms/image/D5603AQFRd8kz-0ZnHA/profile-displayphoto-shrink_800_800/0/1668859492397?e=1675296000&v=beta&t=aMIhR4WXbo2eInVkpk7qSS8Zz8NUlbMRAmFbJOYm1A8" /></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
