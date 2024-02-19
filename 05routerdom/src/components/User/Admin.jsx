import React from "react";
import { useParams } from "react-router-dom";

function Admin(){
    const {adminid}= useParams()
    return(
        <h1>hello:{adminid}</h1>
    )
}

export default Admin