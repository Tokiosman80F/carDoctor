import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        alert("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user?.email);
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="">About</Link>
      </li>
      <li>
        <Link to="">Services</Link>
      </li>
      <li>
        <Link to="/bookings">My Bookings</Link>
      </li>
      <li>
        <Link to="">Blog</Link>
      </li>
      <li>
        <Link to="">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Link to="/" className=" ">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end gap-5">
        <p className="text-primaryColor">{user?.email}</p>
        {user?.email ? (
          <button onClick={handleLogout} className="custom-btn-base custom-btn-secondary ">
            Logout
          </button>
        ) : (
          <Link to={'/login'} className="custom-btn-base custom-btn-secondary ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
