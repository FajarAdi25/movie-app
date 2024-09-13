import React from "react";

const Loading = () => {
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <div
          className="card-img-top bg-secondary"
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
