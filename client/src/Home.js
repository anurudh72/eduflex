import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hom from './components/Home/Home.js'
export const Home = () => {

  return (
    <>
     <Hom />
     </>
  );
};
//   {/* Display each item separately */}

//   {data.map((item, index) => (
//     <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
//   ))}
// </div>

// const Pages = async () => {
//   const fetchData = async () => {
//     try {
//       const result = await api.fetchCourses()
//       if (result) {
//         console.log(result.data.cor);
//         return result.data.cor;
//       }

//     }
//     catch {
//       console.log("error");
//     }

//   }
//   const result = await fetchData();
//   if (!result)
//   return(
//     <div>
//       Loading...
//     </div>
//   )
//   else
//     return (

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//   {result.map((data, index) => (
//     <div key={index} className="bg-white p-4 shadow">
//       {/* Render your result item here */}
//       <h3 className="text-lg font-semibold">{data.title}</h3>
//       <p className="text-gray-600">{data.description}</p>
//     </div>
//         ))}
//       </div>
//     )
// }
