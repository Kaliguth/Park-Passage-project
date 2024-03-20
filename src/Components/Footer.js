import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-light fixed-bottom pt-3">
      <p className="bottom-0 start-0">
        <b>All rights reserved to Einav Kohavi 2024 ©</b>
      </p>
      <div className="position-absolute bottom-0 end-0">
        <Link to="https://github.com/Kaliguth" className="d-inline-flex">
          <img src="github.png" alt="github" width="39" height="39" />
          <p className="text-info mb-0 pt-1"><b>My Github</b></p>
        </Link>
        <Link
          to="https://www.linkedin.com/in/einav-kohavi-9983091b2/"
          className="d-inline-flex"
        >
          <img src="linkedin.png" alt="linkedin" width="45" height="45" />
          <p className="text-info mb-0 pt-2"><b>My Linkedin</b></p>
        </Link>
      </div>
    </div>
  );
}
