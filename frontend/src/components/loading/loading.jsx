// Code citation: https://github.com/auth0-samples/auth0-react-samples/tree/master 

import React from "react";
import loading from "../../../assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
