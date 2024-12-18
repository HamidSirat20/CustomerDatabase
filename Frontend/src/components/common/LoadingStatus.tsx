interface Args {
  status: "success" | "loading" | "failed";
}

const LoadingStatus = ({ status }: Args) => {
  switch (status) {
    case "failed":
      return (
        <div className="container text-center mt-4">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Loading failed!</h4>
          </div>
        </div>
      );
    case "loading":
      return (
        <div className="container text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading customers...</p>
        </div>
      );
    default:
      throw Error("Check API if it is running!");
  }
};

export default LoadingStatus;
