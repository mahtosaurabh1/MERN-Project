import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Random() {
  let [arr, setArr] = useState([]);
  useEffect(()=>{
    handleRandom();
  },[])

  let handleRandom = async () => {
    let res = await fetch("https://random-data-api.com/api/v2/users");
    res = await res.json();
    setArr(res);
    console.log(arr);
  };
  return (
   <div>
    {
       arr.length>0 ? (arr.map((ele,idx)=>{
        return(
           <>
            <img src="ele.avtar" alt="" />
            <h3>{ele.first_name} {ele.last_name}</h3>
            <p>{ele.address}</p>
           </>
        )
    })):<h1>No data</h1>
    }
   </div>
  );
}

export default Random;
