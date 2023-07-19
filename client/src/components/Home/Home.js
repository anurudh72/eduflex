import React, { useEffect, useState } from "react";

import { Grid, CircularProgress } from '@material-ui/core'

import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from '../../styles'
import { useLocation } from 'react-router-dom'
import axios from "axios";

const Hom = () => {

  const [data, setData] = useState(null);


  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


  console.log(user)
  // console.log(userr)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const handleLikeClick = (item) => {
    axios.patch('http://localhost:5000/home/likeCourse', { itemId: item, userId: user?.result?._id||user?.sub })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    const likes = (item) => {
      if (user) {
         return item.likeCount.find((like) => like === ((user?.result?.name) || user)?.sub) ? (
          // <><ThumbUpAltIcon fontSize="large"  />&nbsp;{item.likeCount.length > 2 ? `You and ${item.likeCount.length - 1} others` : `${item.likeCount.length > 1 ? 's' : ''}`}  </>
          <><ThumbUpAltIcon fontSize="large"  />&nbsp;{item.likeCount.length} LIKES 
          </>
        ) :
          (
            <><ThumbUpAltOutlined fontSize="large"  /> &nbsp;{item.likeCount.length}  Like </>
            
          )
      }
      return <><ThumbUpAltOutlined fontSize="large"  /> &nbsp;{item.likeCount.length}  Like </>
      
    }


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
      return <div><CircularProgress /></div>;
    }


    return (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>


        {data.map((item, index) => (
          // <div key={index} className="bg-white p-4 shadow">

          <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
            <Card  className={classes.card}>
              <CardMedia 
                className={classes.media}
                image={item.image}
                title={item.title}
              />
              <div className={classes.overlay}>
                <Typography variant="h4">{item.instructor}</Typography>
                <Typography variant="body1">
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
              <div  style = {{ fontSize:"large" }}  className={classes.details}>
                <Typography variant="body1" color="textPrimary" >
                  {/* {item.topicsCovered.map((topics) => `#${topics} `)} */}
                  { item.outcome }
                </Typography>
              </div>
              <CardContent>
                <Typography className={classes.title} variant="h4" style={{ fontFamily:"sans-serif", fontWeight:"revert"}}  gutterBottom>
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" style={{ fontWeight:"bold", fontSize:"large" }} disabled={!user} onClick={handleLikeClick(item._id)}>
                {likes(item)}
              </Button>
              <Button size="small" color="primary" disabled={!(user?.result?.isAdmin)} onClick={() => { }}>
                <DeleteIcon fontSize="small" /> Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>

      // <h3 className="text-lg font-semibold">{item.title}</h3>
      // <p className="text-gray-600">{item.instructor}</p>
      // </div>
    ))
  }
    </Grid >

  )
}

export default Hom;