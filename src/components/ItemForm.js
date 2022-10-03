import React, {useState} from "react";

function ItemForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = e => { //prevents refresh of page upon click
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        })

        setInput('');
    };

    const handleChange = e => { // now we can type stuff into input
        setInput(e.target.value)
    }

    return (
        <div>
            <form className="item-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add an Item" 
                    value={input}
                    name="text"
                    className="item-input"
                    onChange={handleChange}
                />
                <button className="item-button">Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm