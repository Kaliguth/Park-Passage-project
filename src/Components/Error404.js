import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="text-center">
      <h3 className="d-inline-block bg-danger border border-dark rounded px-3 py-3">
        <b>
          ERROR 404:
          <br />
          Sorry!
          <br />
          Page not found!
        </b>
      </h3>
      <br />
      <img src="404-error.png" alt="error404" width="300" height="300" />
      <br />
      <br />
      <Link to="/">
        <button className="btn btn-light btn-lg"><b>Back to home page</b></button>
      </Link>
    </div>
  );
}
