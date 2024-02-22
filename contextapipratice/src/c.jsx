import React, { useContext } from "react";
import { BioData } from "./App";

function C(){

    const channelName = useContext(BioData)
    return(
        <h1>hello contextapi {channelName} </h1>
    )
}

export default C 