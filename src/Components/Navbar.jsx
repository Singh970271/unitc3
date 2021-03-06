import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
export const Navbar = () => {
    const {isAuth, toggleAuth, handleAuth} = useContext(AuthContext)
    return (
      <div className="navbar">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        {isAuth ? <Link onClick={() => {
        handleAuth(false);
        toggleAuth(null)
      }} className="nav-logout" to="/">
        Logout
      </Link> :

      <Link className="nav-login" to="/login">
        Login
      </Link>}
      </div>
    );
  };