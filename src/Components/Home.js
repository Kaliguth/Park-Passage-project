import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="d-inline-block bg-light bg-opacity-75 border border-dark rounded px-3 py-3">
        <u>
          <b>Welcome to Park Passage!<br/>Your Gateway to America's National Treasures</b>
        </u>
      </h2>
      <br></br>
      <div className="d-inline-block bg-warning bg-opacity-75 border border-dark rounded px-3 py-3">
        <h4>Creator: Einav Kohavi</h4>
        <br></br>
        <Link to="parks">
          <button className="btn btn-light btn-lg"><b>Start an adventure!!</b></button>
        </Link>
      </div>
    </div>
  );
}
