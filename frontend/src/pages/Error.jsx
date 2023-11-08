import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='error'>
            <h1>404</h1>
            <h2>Oups! La page que vous recherchez n'existe pas.</h2>
            <h3>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </h3>
        </div>
    );
};