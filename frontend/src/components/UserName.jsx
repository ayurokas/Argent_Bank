import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateProfile } from '../utils/apiFetch';
import { getUserData } from '../redux/actions';

export default function UserName() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.loggedReducer);
  const dataUser = useSelector((state) => state.getUserReducer);

  const [newFirstName, setNewFirstName] = useState(localStorage.getItem('firstName') || '');
  const [newLastName, setNewLastName] = useState(localStorage.getItem('lastName') || '');
  const [isEditing, setIsEditing] = useState(false);

    // Utilisation du hook useState pour gérer l'état local
  useEffect(() => {
    if (!isLogged) {
      navigate('/login'); 
    } else if (!newFirstName && !newLastName && dataUser.firstName && dataUser.lastName) {
      setNewFirstName(dataUser.firstName);
      setNewLastName(dataUser.lastName);
    }
  }, [isLogged, navigate, dataUser, newFirstName, newLastName]);

  // Gère le changement de nom et prénom
  const handleChange = async () => {
    const token = localStorage.getItem('token'); //obtention token
    const newProfile = await updateProfile(token, newFirstName, newLastName); 

    dispatch(getUserData({ firstName: newProfile.body.firstName, lastName: newProfile.body.lastName }));// maj des donnee dans redux

    localStorage.setItem('firstName', newProfile.body.firstName);//maj local storage
    localStorage.setItem('lastName', newProfile.body.lastName);
    setIsEditing(false);
  };

  return (
    <div className="header">
      {isEditing ? (
        <div className="userEdit">
          <h1>Welcome back<br /></h1>
          <div className="names-edit">
            <input
              className="input"
              type="text"
              id="firstname"
              placeholder="Your first name"
              onChange={(e) => { setNewFirstName(e.target.value); }}
              value={newFirstName}
            />
            <input
              className="input"
              type="text"
              id="lastname"
              placeholder="Your last name"
              onChange={(e) => { setNewLastName(e.target.value); }}
              value={newLastName}
            />
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
