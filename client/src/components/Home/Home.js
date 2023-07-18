import React, { useEffect, useState } from "react";

import { Grid, CircularProgress } from '@material-ui/core'

import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from '../../styles'

import axios from "axios";

const Hom = () => {

  const [data, setData] = useState(null);

  const classes = useStyles()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/home");
        setData(response.data.cor);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
  <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      
     
  {data.map((item, index) => (
    // <div key={index} className="bg-white p-4 shadow">

    <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{item.instructor}</Typography>
          <Typography variant="body2">
            {moment(item.createdAt).fromNow()}
          </Typography>
        </div>

        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => { }}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {item.topicsCovered.map((topics) => `#${topics} `)}
          </Typography>
        </div>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {item.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => { }}>
            <ThumbUpAltIcon fontSize="small" />
            Like {item.likes}
          </Button>
          <Button size="small" color="primary" onClick={() => { }}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>

    // <h3 className="text-lg font-semibold">{item.title}</h3>
    // <p className="text-gray-600">{item.instructor}</p>
    // </div>
  ))}
  </Grid>

  )
}

export default Hom;