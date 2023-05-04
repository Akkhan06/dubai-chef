import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div
        className="w-11/12 mx-auto flex justify-center items-center"
        id="error-page"
      >
        <div className="text-center">
          <h1 className="text-7xl font-bold text-orange-500 mt-10">Oops!</h1>
          <img className="w-1/2 mx-auto" src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg" alt="" />
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
