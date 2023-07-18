import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import useStyles from './styles.js'
import * as api from '../../api'

const Form = () => {
    const [courseData, setCourseData] = useState({
        instructor: '', title: '', outcome: '', topicsCovered: '', image: ''
    })
    const handleSubmit=async()=> {
            try{
                const result = await api.createCourse(courseData) 
        
                console.log(result);
        
            }
            catch (error) {
                console.log(error)
            }
    }
    const classes = useStyles()
    console.log(courseData);

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography style={{ fontFamily: 'cursive', alignContent: 'center', fontWeight: 'revert' , marginBottom:'3%'}} variant="h6">Enter Course Description
                </Typography>
                <TextField margin="dense" name="instructor" variant="outlined" label="Instructor" fullWidth value={courseData.instructor} onChange={(e) => setCourseData({ ...courseData, instructor: e.target.value })} />

                <TextField margin="dense" name="title" variant="outlined" label="Title" fullWidth value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
                
                <TextField margin="dense" name="outcome" variant="outlined" label="Outcome" fullWidth value={courseData.outcome} onChange={(e) => setCourseData({ ...courseData, outcome: e.target.value })} />
                
                <TextField margin="dense" name="topicsCovered" variant="outlined" label="TopicsCovered" fullWidth value={courseData.tags} onChange={(e) => setCourseData({ ...courseData, topicsCovered: e.target.value })} />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setCourseData({ ...courseData, image: base64 })} />

                </div>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="medium"  fullWidth >Clear</Button>

            </form>
        </Paper>
    )
}

export default Form