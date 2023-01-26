import React from "react";


function Liste(props) {

    return (

        <div id="user-list-container centered-container">
            <h1 id="user-list-title">Liste des utilisateurs :</h1>
            <ul id="user-list">
                {props.data.map(user => (
                    <li className="user" key={user.index}>
                        <p className="userName">Nom : {user.name}</p>
                        <p className="userAge">Âge : {user.age} ans</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Liste;
