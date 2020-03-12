import React from "react";
import loading from '../images/loader.gif'

const LoadingPage = () => (
    <div className={"loader"}>
        <img className={"loader__image"} src={loading}/>
    </div>
);
export default LoadingPage;