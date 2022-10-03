import React, {useState} from "react";

function ItemForm() {
    const [input, setInput] = useState('');
    return (
        <div>
            <form className="item-form">
                <input
                    type="text"
                    placeholder="Add an Item" 
                    value={input}
                    name="text"
                    className="item-input">
                </input>
                <button className="item-button">Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm