import { useState } from "react"

export default function Player({initialName, symbol}) {

    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    let editablePlayerName  = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        btnCaption = "Save";
    } else {
        btnCaption = "Edit";
    }   
    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName}
        onChange={handleChange}
        />;
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li>
              <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )

}