import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Videopop from './videopop.js';

let videos = [
  {
    "id": "001",
    "title": "Topic of the Class 1",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/personal/arpit_patni_cloudodyssey_co/_layouts/15/stream.aspx?id=%2Fpersonal%2Farpit%5Fpatni%5Fcloudodyssey%5Fco%2FDocuments%2FRecordings%2FTraining%20sessions%20for%20SFCC%201%20%26%202%2E%2D20221130%5F124310%2DMeeting%20Recording%2Emp4&ga=1"
  },
  {
    "id": "002",
    "title": "Topic of the Class 2",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/arpit_patni_cloudodyssey_co/EUiZoE4L2MFEiaUMi0mfPrsB6YVk-M5vIlge3uUWESRTSA"
  },
  {
    "id": "003",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/pathiwada_methushal_cloudodyssey_co/EXtm1NygNchDmAV4sDLSxVUBllLbLniGBliYkwX_7Az-_w"
  },
  {
    "id": "004",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/koushik_nalam_cloudodyssey_co/ETtgx9-5WvtMp7Ua1jgni8kBYskKdEk_neuokJmJ0zE1MA"
  },
  {
    "id": "005",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/commerce_architect_cloudodyssey_co/ER9Vi6CzJRxLr55zAj1LG34BrHpbCKqzeMKP7nQHFm1Pdg"
  },
  {
    "id": "006",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/commerce_architect_cloudodyssey_co/ERSpwtx4HyFKoPF693PAsxsBiLPRIcxK4v1jIY1rjCjqkA"
  },
  {
    "id": "007",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/zuveria_banu_cloudodyssey_co/EQa0uF_LFP9Fs_PAkzMyULsBUccP7B7ZEAEgaX2fZCu6cw"
  },
  {
    "id": "008",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/commerce_architect_cloudodyssey_co/Eax-cOkdMZtOstQkQQLs1sMBT1pL6sxaE1m9duBeYAm8og"
  },
  {
    "id": "009",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/koushik_nalam_cloudodyssey_co/ESwDV0A7_BlJq8PXVREqqJsBaIlnCZS-Owu3k-P-jkWaBA"
  },
  {
    "id": "010",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/rajesh_j_cloudodyssey_co/EVXBSJonkuVPk98oNrYPovQB6E9LE5dpFnmwfYSRkv2elg"
  },
  {
    "id": "011",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/commerce_architect_cloudodyssey_co/ETKIcGVg1IZMmVfeCQKCD40BvEDnHTFRejl0nOmDWKQYvA"
  },
  {
    "id": "012",
    "title": "Topic of the Class",
    "discription": "short desciption of the class should be prvoided here.",
    "link": "https://cloudodysseyindia-my.sharepoint.com/:v:/g/personal/mohammad_arsha_cloudodyssey_co/ER4LOT39hhFAkBgTDA7jgJgBmKNb0W5X423d5o5LGl30hg"
  }
];
export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {videos.map((e)=>{
        return (<>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"  />
        </ListItemAvatar>
        <ListItemText
          primary={e.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {e.id} - 
              </Typography>
              {e.discription}
            </React.Fragment>
          }
        />
        <Videopop arr={videos} />
      </ListItem>
        </>);
      })}
    </List>
  );
}