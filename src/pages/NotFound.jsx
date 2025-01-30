import React from "react";
import withLayout from "../components/withLayout";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default withLayout(NotFound);