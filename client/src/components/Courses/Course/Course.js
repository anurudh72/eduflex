import React from "react";
import { Card, CardActions, CardContent, Button, CardMedia, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './styles.js'

const Course = ({ course }) => {
    const classes = useStyles()
    console.log(course + ' huhu ')
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={course.image} title={course.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">
                        {course.instructor}
                    </Typography>
                    <Typography variant="body2">
                        {moment(course.createdAt).fromNow()}
                    </Typography>
                </div>

                <div className={classes.overlay2}>
                    <Button style={{ color: "white" }} size="small" onClick={() => { }} >
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div >
                <div className={classes.details} >
                    <Typography variant="body2" color="textSecondary">
                        {course.topicsCovered.map(( topics) =>        `#${topics} `)}
                    </Typography>

                </div>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>
                        {course.title}
                    </Typography>

                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => { }}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like {course.likes }
                    </Button>
                    <Button size="small" color="primary" onClick={() => { }}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                </CardActions>
        </Card>
    )
}

export default Course;