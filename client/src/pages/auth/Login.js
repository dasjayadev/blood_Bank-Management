import React from "react";
import Form from "../../component/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../component/Spinner";
import { toast } from "react-toastify";

function Login() {
  let { error, loading } = useSelector((item) => item.auth);
  return (
    <>
      {loading && <Spinner />}
      {!loading && error && toast.error(error.message)}
      {!loading && !error && (
        <>
          <div className="contaFiner-fluid vh-100">
            <div className="row h-100 g-0">
              <div className="col-md-6 d-none d-md-block p-0">
                <img
                  src="./assets/blood cover.jpg"
                  alt="blood_bank_login"
                  className="img-fluid w-100 h-100"
                  loading="lazy"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
                <div className="p-5 shadow rounded">
                  <Form
                    role=""
                    submitText="Submit"
                    formTitle="Login"
                    formType="login"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;
