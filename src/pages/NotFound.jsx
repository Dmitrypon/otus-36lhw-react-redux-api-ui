import React from "react";
import withLayout from "../components/withLayout";

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Page not found.</p>
  </div>
);

export default withLayout(NotFound);


