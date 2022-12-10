import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function Banner() {
  return (
    <Box
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `3px solid ${t.palette.divider}`,
        height: "20rem",
      }}
    >
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            alignSelf: 'center', 
          width: "100%",
          height: "100%",
          }}
          image="https://images.unsplash.com/photo-1530305408560-82d13781b33a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80=1670684984~exp=1670685584~hmac=ee4070912171f4d2a9d86d5121f4ba09024bc4b0560cd28990693afb3626cbf2"
        />
         <ImageListItemBar
            component="h3"
            variant="h3"
            title="SFCC CLASS_ROOM"
            subtitle="This is just a demo lone is for asvva bdvd"
          />
      </Card>
    </Box>
  );
}
