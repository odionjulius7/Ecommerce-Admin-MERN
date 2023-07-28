import React from "react";

export const Julius = () => {
  return (
    <div className="card-1">
      <div className="img-wrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3U1qBRmQOSJkBX5kmNbdrR_Q7InY1Q4zLEH0fZAjxg&s"
          alt=""
        />
      </div>
      <div className="content">
        <h5>Lorem ipsum dolor sit </h5>
        <div>
          <p>color: Maroon</p>
          <p>Size: XXl</p>
        </div>
        <div className="one">
          <div className="button-wrap">
            <button>+</button>
            <span>1</span>
            <button>use icon instead</button>
          </div>
          <p>Rs. 1,299</p>
        </div>
      </div>
    </div>
  );
};
