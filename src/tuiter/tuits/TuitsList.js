import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";


const TuitsList = () => {
    const tuitsArray=useSelector((state)=>state.tuits)
    return (
        tuitsArray.map(item => <TuitItem key={item._id} tuitItem={item}/>)

    );
}
export default TuitsList;









