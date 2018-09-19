import React from 'react'
import ListBox from '../App/Product/listBox'

export default props => (
  <li>
    <ListBox>{props.id ? props.id : "#"}
    </ListBox>
    <ListBox big left>
      <input 
        type="text"
        value={props.name}
        name="name"
        onChange={props.onChange}
      />
    </ListBox>
    <ListBox>
      <input 
        type="text" 
        value={props.price}
        name="price"
        onChange={props.onChange}
      />
    </ListBox>
    <ListBox>
      <button onClick={props.onEdit}>Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </ListBox>
  </li>
)