// Ce composant React Header utilise Redux pour gérer l'état de connexion et affiche des liens de navigation. 
// Il utilise React Router pour la navigation et affiche le nom de l'utilisateur si connecté.

import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../redux/actions";

export default function Header() {
   // Utilisation de useSelector pour accéder à l'état de connexion et au nom de l'utilisateur depuis Redux.
  const isLogged = useSelector((state) => state.loggedReducer);
  const userName = useSelector((state) => state.getUserReducer);

  // Utilisation de useDispatch pour dispatcher des actions Redux.
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLogged ? (
          <div className="userHeader">
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName.firstName}
            </div>
            <NavLink to="/" className="main-nav-item" onClick={() => { window.localStorage.clear(); dispatch(loggedOut());}}> <i className="fa fa-sign-out"></i>Sign Out</NavLink>
          </div>
        ) : (
          <Link to="login" className="main-nav-item"><i className="fa fa-user-circle"></i>Sign In</Link>
        )}
      </div>
    </nav>
  );
}