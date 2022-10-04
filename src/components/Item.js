import React, {useState} from "react";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import ItemForm from "./ItemForm";

function Item({items, completeItem, editItem, removeItem}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        editItem(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <ItemForm 
            edit={edit}
            onSubmit={submitUpdate}
        />
    }

    return items.map((item, index) =>  (
        <div className="item-container">
            <div 
                className={item.isComplete ? 'item-row complete' : 'item-row'}
                key={item.id}
                onClick={() => completeItem(item.id)}
        >
                <div className='item-text'>
                    {item.text}
                </div>
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeItem(item.id)}
                    className="delete-icon"
                />
                <TiEdit 
                    onClick={() => setEdit({id: item.id, value: item.text})}
                    className="edit-icon"
                />
            </div>
        </div>
        
    ))
}

export default Item