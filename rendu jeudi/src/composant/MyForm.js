import React, {useEffect, useState} from 'react';
import Liste from './MyList';

function Formulaire() {

    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isValid, setIsValid] = useState(false);
    

    useEffect(() => {
        if (name !== '' && age !== '') {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [name, age]);

    const submitForm = (e) => {
        e.preventDefault();
        setUser([...user, { name: name, age: age }]);
        setName('');
        setAge('');
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

    return (
        <main>
            <div className="centered-container">
                <form onSubmit={submitForm}>
                    <input className="text-input" type="text" value={name} onChange={handleChangeName} placeholder="Indiquer votre Nom" />
                    <br></br>
                    <input className="text-input" type="number" value={age} min='0' onChange={handleChangeAge} placeholder="Indiquer votre Âge" />
                    <br></br>
                    <button className="submit-button" type="submit" hidden={!isValid}>Créer l'utilisateur</button>
                </form>
            </div>
            <Liste data={user}/>
        </main>
    );
}

export default Formulaire;