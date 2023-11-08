// Composant UserName : Affiche et permet d'éditer le nom de l'utilisateur.


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { updateProfile } from '../utils/apiFetch';
import { getUserData } from '../redux/actions';


// Composant UserName pour afficher et éditer le nom de l'utilisateur

export default function UserName() {
    // État local pour le prénom et le nom de l'utilisateur en cours d'édition
    const [newFirstName, setNewFirstName] = useState();
    const [newLastName, setNewLastName] = useState();
    const [isEditing, setIsEditing] = useState(false);
    let navigate = useNavigate();

    // Utilisation de useSelector pour obtenir des données de l'état global Redux
    const isLogged = useSelector((state) => state.loggedReducer);
    const dataUser = useSelector((state) => state.getUserReducer);

    // Utilisation de useDispatch pour dispatcher des actions Redux
    const dispatch = useDispatch();

    // Gestionnaire de changement pour mettre à jour le prénom et le nom en cours d'édition
    const handleChange = async () => {
        const token = localStorage.getItem('token');
        const newProfile = await updateProfile(token, newFirstName, newLastName);
        console.log(newProfile);
        dispatch(getUserData(newProfile.body.firstName, newProfile.body.lastName));
        setIsEditing(false);
    };

    // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    if (isLogged === false) {
        navigate('/login');
    }

    // Rendu conditionnel en fonction du mode d'édition
    return (
        <div className="header">
        {isEditing ? (
          <div className="userEdit">
            <h1>Welcome back<br/></h1>
            <div className="names-edit">
              <input className="input" type="text" id="firstname" placeholder= "Your first name" onChange={(e) => { setNewFirstName(e.target.value);}}/>
              <input className="input" type="text" id="lastname" placeholder= "Your last name" onChange={(e) => { setNewLastName(e.target.value);}}/>
            </div>
            <div className="buttons-edit">
              <button className="button" onClick={handleChange}>Save</button>
              <button className="button" onClick={() => setIsEditing(false)}> Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Welcome back<br />
              <div className="userName">
                {dataUser.firstName} {dataUser.lastName}!
              </div>
            </h1>
            <button onClick={() => { setIsEditing(true);}} className="edit-button"> Edit Name </button>
          </div>
        )}
      </div>
    );
}