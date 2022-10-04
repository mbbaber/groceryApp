import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

function ItemList() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        if (!item.text) { // cannot add blank item
            return;
        }

        const newItems = [item, ...items];

        setItems(newItems); 
    }

    const editItem = (id, newValue) => {
        if (!newValue.text) { // cannot add blank item
            return;
        }

        setItems(prev => prev.map(item => (item.id === id ? newValue : item)))
    }

    const removeItem = id => {
        const newItems = [...items].filter(item => item.id !== id)

        setItems(newItems);
    }

    const completeItem = id => {
        let updatedItems = items.map(item => {
            if (item.id === id) {
                item.isComplete = !item.isComplete; //toggle
            }
            return item;
        })
        setItems(updatedItems);
    }

    return (
        <div>
            <ItemForm onSubmit={addItem}/>
            <Item 
                items={items}
                completeItem={completeItem}
                removeItem={removeItem}
                editItem={editItem}
            />
        </div>
    )
}

export default ItemList