import axios from 'axios'
import { useState } from 'react';
// const [dataFetch,setDataFetch]=useState()

 const url = 'http://localhost:5000/home'
// const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/home'); // Replace with your actual API URL
//       const jsonData = await response.json();
//        setDataFetch(jsonData)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }

    
//   };

//  console.log(fetchData());
//  console.log("Data", fetchData);
export const fetchCourses = () => axios.get(url);

export const createCourse = (newCourse) => axios.post(url, newCourse)