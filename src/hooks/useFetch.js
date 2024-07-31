import { useState,useEffect } from "react";
export const useFetch = (apiPath,queryterm='') => {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=3bdb7099a6d2bcbfcdbc692e73f52c80&language=en-US&page=1&query=${queryterm}`
    useEffect(()=>{
        async function fetchmovies(){
          const response=await fetch(url);
          const data = await response.json();
          setData(data.results);
        }
        fetchmovies();
      },[url])
  return {data}
}
