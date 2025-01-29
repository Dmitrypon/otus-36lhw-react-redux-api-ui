import React from "react";

const withLayout = (Component) => {
  return (props) => (
    <div className="layout">
      <Component {...props} />
    </div>
  );
};

export default withLayout;
