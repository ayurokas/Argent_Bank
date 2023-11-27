import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateProfile } from '../utils/apiFetch';
import { getUserData } from '../redux/actions';

export default function UserName() {
    const [newFirstName, setNewFirstName] = useState();
    const [newLastName, setNewLastName] = useState();
    const [isEditing, setIsEditing] = useState(false);

    const [placeholderFirstName, setPlaceholderFirstName] = useState("Your first name");
    const [placeholderLastName, setPlaceholderLastName] = useState("Your last name");

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.loggedReducer);
    const dataUser = useSelector((state) => state.getUserReducer);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 920) {
                setPlaceholderFirstName("First Name");
                setPlaceholderLastName("Last Name");
            } else {
                setPlaceholderFirstName("Your first name");
                setPlaceholderLastName("Your last name");
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = async () => {
        const token = localStorage.getItem('token');
        const newProfile = await updateProfile(token, newFirstName, newLastName);
        dispatch(getUserData(newProfile.body.firstName, newProfile.body.lastName));
        setIsEditing(false);
    };

    if (isLogged === false) {
        navigate('/login');
    }

    return (
        <div className="header">
            {isEditing ? (
                <div className="userEdit">
                    <h1>Welcome back<br/></h1>
                    <div className="names-edit">
                        <input className="input" type="text" id="firstname" placeholder={placeholderFirstName} onChange={(e) => { setNewFirstName(e.target.value); }}/>
                        <input className="input" type="text" id="lastname" placeholder={placeholderLastName} onChange={(e) => { setNewLastName(e.target.value); }}/>
                    </div>
                    <div className="buttons-edit">
                        <button className="button" onClick={handleChange}>Save</button>
                        <button className="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Welcome back<br />
                        <div className="userName">
                            {dataUser.firstName} {dataUser.lastName}!
                        </div>
                    </h1>
                    <button onClick={() => { setIsEditing(true); }} className="edit-button">Edit Name</button>
                </div>
            )}
        </div>
    );
}
