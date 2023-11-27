// Ce composant React utilise Hooks pour les états locaux, React Router pour la navigation, et Redux pour l'état global. Il permet la modification du profil utilisateur via un appel API.


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateProfile } from '../utils/apiFetch';
import { getUserData } from '../redux/actions';

// Composant fonctionnel UserName pour gérer le profil d'un utilisateur.
export default function UserName() {
    // Déclaration des états pour le nouveau prénom et nom, et un état pour la modification.
    const [newFirstName, setNewFirstName] = useState();
    const [newLastName, setNewLastName] = useState();
    const [isEditing, setIsEditing] = useState(false);

    // États pour le placeholder des champs de saisie.
    const [placeholderFirstName, setPlaceholderFirstName] = useState("Your first name");
    const [placeholderLastName, setPlaceholderLastName] = useState("Your last name");

    // Utilisation du hook useNavigate pour la redirection.
    let navigate = useNavigate();

    // Utilisation de Redux pour dispatcher des actions et accéder à l'état global.
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.loggedReducer);
    const dataUser = useSelector((state) => state.getUserReducer);

    // Utilisation de useEffect pour gérer le redimensionnement de la fenêtre et ajuster les placeholders.
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

    // Fonction pour gérer le changement de nom.
    const handleChange = async () => {
        const token = localStorage.getItem('token');
        const newProfile = await updateProfile(token, newFirstName, newLastName);
        dispatch(getUserData(newProfile.body.firstName, newProfile.body.lastName));
        setIsEditing(false);
    };

    // Redirection si l'utilisateur n'est pas connecté.
    if (isLogged === false) {
        navigate('/login');
    }

    // Rendu du composant, affichant différentes interfaces selon que l'utilisateur édite son profil ou non.
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
