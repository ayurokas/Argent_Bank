// Ce composant React gère le formulaire de connexion. 
//Les appels API sont effectués pour obtenir le token et les données de l'utilisateur

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getToken, getUser } from '../utils/apiFetch';
import { loggedIn, getUserData } from '../redux/actions';

export default function LoginForm() {
    // États pour stocker les valeurs des champs du formulaire et les erreurs éventuelles
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [messageError, setMessageError] = useState('');

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.loggedReducer);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        // Validation des champs email et mot de passe
        if (!email) setEmailError('Please enter a valid email');
        if (!password) setPasswordError('Please enter a password');

    
        const user = { email, password };
        const dataToken = await getToken(user); // Appel à l'API pour obtenir le token

        if (dataToken.status === 200) { //si statut ok utilisateur co
            localStorage.setItem('token', dataToken.body.token);
            const token = localStorage.getItem('token'); 

            if (token) {
                const dataUser = await getUser(token);
                dispatch(getUserData(dataUser.body.firstName, dataUser.body.lastName));  // Mise à jour des données de l'utilisateur dans Redux
                dispatch(loggedIn());
                return navigate('/user');
            }
        } else {
            setMessageError('Invalid user');
        }
    };
    
    useEffect(() => {
        if (isLogged) {
            navigate('/user');
        }
    }, [isLogged, navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' autoComplete="username"value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className='email_error'>{emailError}</p>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='password_error'>{passwordError}</p>
            </div>
            <div className='input-remember'>
                <input type='checkbox' id='remember-me' />
                <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button className='sign-in-button'>Sign in</button>
            <p className='message_error'>{messageError}</p>
        </form>
    );
}
