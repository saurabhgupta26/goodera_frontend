import React from "react";

export default function Hero() {
  return (
    <div className="position-relative">
      <div className="shadow-sm bg-body w-80 d-sm-flex justify-content-between align-items-end rounded-lg border-0 p-3 py-4 position-absolute top-0 start-50 translate-middle bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <img src="/icons/find.svg" alt="find" />
          <input
            className="border-0 fs-6 fw-lighter w-10"
            type="text"
            id=""
            placeholder="Job title or keyword  "
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center">
            <img src="/icons/location.svg" alt="location" />
            <input
              className="border-0 fs-6 fw-lighter w-10"
              type="text"
              id=""
              placeholder="Select location"
            />
          </div>
          <img src="/icons/down.svg" alt="down" />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <input
            type="button"
            value="Search"
            className="btn btn-color px-6 py-2 bold"
          />
        </div>
      </div>
    </div>
  );
}
