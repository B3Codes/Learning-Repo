import React, {useState} from "react";

function DynamicList(){

  {/* state to manage list of items */}
  const [items, setItems] = useState([]);

  {/* state to manage new item */}
  const [newItem, setNewItem] = useState('');

  function addItems(){
    if(newItem.trim() !==''){ //prevent adding empty item
      setItems((prevItems) => [...prevItems, newItem]);  // Adding new item to list
      setNewItem('');  // reset i/p field
    }
  }

  function removeItems(index){
    setItems((prevItems) => prevItems.filter((_,i) => i != index)); // remove an item at particular index

    /* filter function
      - used for transforming the array
      - create and return new array based on specific condition
    */
  }

  return (<div>
    <input
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}  // update  state on input chnage
    />
      <button onClick={addItems}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItems(index)}>Remove</button>
            </li>

        ))}
      </ul>
    
  </div>);
}

export default DynamicList;