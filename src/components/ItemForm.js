import React, {useState, useEffect, useRef} from "react";
import {RiAddCircleLine} from 'react-icons/ri';

function ItemForm(props) {
    const [input, setInput] = useState(props.edit ? {
            text: props.edit.value,
            number: props.edit.value
        } : 
        {
            text: '',
            number: null
        }
    );

    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus() //focus on whatever you put as the ref
    })

    const handleSubmit = e => { 
        e.preventDefault(); //prevents refresh of page upon click

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input.text,
            number: input.number
        })

        setInput('');
    };

    const handleChange = e => { // now we can type stuff into input
        const value = e.target.value;
        setInput({...input,
            [e.target.name]: value})
    };

    return (
        <div>
            <form className="item-form" onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                    <input
                        type="text"
                        placeholder="Edit item" 
                        value={input.text}
                        name="text"
                        className="item-input edit"
                        onChange={handleChange}
                        ref={focus}
                    />
                        <input
                        type="number"
                        placeholder="Qty"
                        value={input.number}
                        name="number"
                        className="item-input add"
                        onChange={handleChange}
                    />
                    <button className="item-button edit">edit</button>
                    </>
                ) : (
                    <>
                    <input
                        type="text"
                        placeholder="Add item" 
                        value={input.text}
                        name="text"
                        className="item-input add"
                        onChange={handleChange}
                        ref={focus}
                    />
                    <input
                        type="number"
                        placeholder="Qty"
                        value={input.number}
                        name="number"
                        className="item-input add"
                        onChange={handleChange}
                    />
                    <button className="item-button">
                        <RiAddCircleLine
                            className="add-icon"
                        />
                    </button>
                    </>
                )}
            </form>
        </div>
    )
}

export default ItemForm