import React from "react";
import loadings from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loadings} alt="loading" />
    </div>
  );
};

export default Spinner;
