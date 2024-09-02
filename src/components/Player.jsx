import {useState} from "react";
import Input from "./Input.jsx";

export default function Player({children, symbol}) {

  const [newName, setNewName] = useState(children);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit () {
    setIsEditing(prevEditState => !prevEditState);
  }

  function onInputChange (e) {
    setNewName(e.target.value);
  }

  return (
    <li>
      <span className='player'>
        {isEditing ? <Input value={newName} onChange={onInputChange}/> : <span className='player-name'>{newName}</span>}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}