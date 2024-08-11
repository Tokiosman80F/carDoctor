import { useContext } from "react";
import loginImg from "../../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((userCredential) => {
        console.log(userCredential), alert("login is successful");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="hero  h-[85vh]">
        <div className="hero-content flex-col lg:flex-row w-full ">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  w-1/2 max-w-sm shrink-0 shadow-2xl border-2">
            <form onSubmit={handleLogin} className="card-body  space-y-5 ">
              <h1 className="text-[40px] font-semibold text-center">Login </h1>
              <div className="form-control text-lg">
                <label className="label">
                  <span className="label-text  ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-lg">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <input
                type="submit"
                value=" Sign in"
                className="custom-btn-base custom-btn-primary "
              />

              <p className="font-normal text-center  text-darkColor">
                New Here ?
                <Link
                  to="/signup"
                  className="text-primaryColor font-semibold ml-2 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
