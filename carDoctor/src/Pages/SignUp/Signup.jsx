import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(user, email, password);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="hero  h-[85vh]">
        <div className="hero-content flex-col lg:flex-row w-full ">
          <div className="w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  w-1/2 max-w-sm shrink-0 shadow-2xl border-2">
            <form onSubmit={handleSignin} className="card-body  space-y-5 ">
              <h1 className="text-[40px] font-semibold text-center">Sign Up</h1>

              <div className="form-control text-lg">
                <label className="label">
                  <span className="label-text  ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

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
                value=" Sign Up"
                className="custom-btn-base custom-btn-primary "
              />

              <p className="font-normal text-center  text-darkColor">
                ALready have an Account ?
                <Link
                  to="/login"
                  className="text-primaryColor font-semibold ml-2 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
