import React from 'react';
import { Link } from 'react-router-dom';
import imgError from "../assets/404Error.svg";

export default function Error() {
    return (
        <div className='error'>
            <img src={imgError} alt="error 404" width="600" height="600"/>
            <h2>Oups! La page que vous recherchez n'existe pas.</h2>
            <h3>
                <Link to="/" style={{ textDecoration: 'none', color: '#00bb76' }}>Retourner sur la page d'accueil</Link>
            </h3>
        </div>
    );
};