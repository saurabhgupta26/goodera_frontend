import React from "react";

export default function Header() {
  return (
    <div className="header_bg">
      <div className="d-flex justify-content-between container align-items-center">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between m-4 align-items-center">
            <img src="/icons/bag.svg" alt="bag" />
            <a href="##" className="text-white link mx-2">
              JobHunt
            </a>
          </div>
          <a href="##" className="text-white link m-4 active">
            {" "}
            Find Jobs{" "}
          </a>
          <a href="##" className="text-white link m-4">
            Upskill Yourself
          </a>
        </div>

        <div className="d-flex justify-content-between align-items-center m-4">
          <a href="##" className="text-white link mx-4">
            Post a Job
          </a>
          <a href="##" className="text-white link mx-4">
            Sign In
          </a>
        </div>
      </div>
      <div className="container">
        <div className="d-block mx-4 my-5">
          <h1 className="h1 boldest text-white my-2"> Find Your Dream Job</h1>
          <p className="h5 text-white my-2">
            Browse through thousands of full-time or part-time jobs near you
          </p>
        </div>
      </div>
    </div>
  );
}
