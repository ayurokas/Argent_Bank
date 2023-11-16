import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getToken, getUser } from '../utils/apiFetch';
import { loggedIn } from '../redux/actions';
import { getUserData } from '../redux/actions';

export default function LoginForm() {
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

        // Error message
        if (!email) setEmailError('Please enter a valid email');
        else setEmailError('');
        if (!password) setPasswordError('Please enter a password');
        else setPasswordError('');

        const user = { email, password };
        console.log(user);

        // User logged in
        const dataToken = await getToken(user);
        console.log(dataToken);

        // Stroke token in local storage if user is logged in successfully
        if (dataToken.status === 200) {
            localStorage.setItem('token', dataToken.body.token);
        } else {
            setMessageError('Invalid user');
        }

        const token = localStorage.getItem('token');

        // Get user profile data

        if (token) {
            const dataUser = await getUser(token);
            console.log(dataUser);
            dispatch(getUserData(dataUser.body.firstName, dataUser.body.lastName));
            dispatch(loggedIn());
            console.log(dataUser.body.firstName);
            console.log(dataUser.body.lastName);
            return navigate('/user');
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