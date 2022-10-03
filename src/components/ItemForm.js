import React, {useState, useEffect, useRef} from "react";

function ItemForm(props) {
    const [input, setInput] = useState('');

    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus() //focus on whatever you put as the ref
    })

    const handleSubmit = e => { 
        e.preventDefault(); //prevents refresh of page upon click

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };

    const handleChange = e => { // now we can type stuff into input
        setInput(e.target.value)
    };

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
                    ref={focus}
                />
                <button className="item-button">Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm