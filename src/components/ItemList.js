import React, { useState } from "react";
import ItemForm from "./ItemForm";

function ItemList() {
    const {items, setItems} = useState([]);

    return (
        <div>
            <h1>What do you need?</h1>
            <ItemForm></ItemForm>
        </div>
    )
}

export default ItemList