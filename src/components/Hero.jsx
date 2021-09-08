import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <img src="/icons/find.svg" alt="find" />
          <input type="text" name="" id="" placeholder="Job title or keyword" />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img src="/icons/location.svg" alt="location" />
            <input type="text" name="" id="" placeholder="Select location" />
          </div>
          <img src="/icons/down.svg" alt="down" />
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <input type="button" value="Search" className="btn btn-primary" />
        </div>
        <div className="d-flex justify-content-between align-items-center"></div>
      </div>
    </div>
  );
}
