import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <h1 className="error-title">Oops!</h1>
      <p className="error-message">Sorry, an unexpected error has occurred.</p>
      <p className="error-detail">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
