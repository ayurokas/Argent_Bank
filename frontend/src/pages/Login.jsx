// Ce composant React, Login, sert de page de connexion pour l'utilisateur. 
//Il intègre un formulaire de connexion via le composant LoginForm et présente un design attrayant avec des icônes.


import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm/>
      </section>
    </main>
  );
}
