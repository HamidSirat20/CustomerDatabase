import BackToButton from "./common/BackToButton";

const PageNotFound = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="display-4 text-danger mb-4">Oops! Page not found!</h1>
        <BackToButton route="/" buttonName="Go to Home" />
      </div>
    </>
  );
};

export default PageNotFound;
