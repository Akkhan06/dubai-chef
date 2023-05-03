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
          <p className="text-3xl font-semibold mt-10">
            Sorry, Vai apnar ai link a kono page nai, apni apnar sothik link
            diya sesta korun
          </p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
