import Movie from "../Movie/Movie";
import { useEffect } from "react";

function MovieList({data , setData ,getTrinding}){

    useEffect(()=>{
        void(async()=>{
            let data=await getTrinding();
            setData(data)
        })();

    },[]) 


    return(
        <>
       <Movie data={data}/>
        </>
    )
}

export default MovieList;