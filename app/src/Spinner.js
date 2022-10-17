//makes the spinner
export default function Spinner() {
  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div
            className="spinner-border text-dark justify-contents-center"
            role="status"
          ></div>
        </div>
      </div>
    </div>
  );
}
