import React, { Component } from 'react';
import ListBox from '../App/Product/listBox'
import EditList from './inputList'

class ProductItem extends Component {
  state = {
    isEdited : false,
    id: this.props.id,
    name: this.props.name,
    price: this.props.price
  }

  onEdit = () => {
    this.setState({isEdited: !this.state.isEdited}) 
  }
  onSubmit = () => {
    this.props.onEdit(this.state.id, this.state.name, this.state.price)
  }
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }
  onDelete = () => {
    this.props.onDelete(this.state.id)
  }

  render(){
    const { id, name, price } = this.state
    return (
      this.state.isEdited 
      ? <EditList onChange= {this.onChange} onCancel={this.onEdit} 
          id={id} name={name} price={price} onEdit={this.onSubmit}></EditList>
      : <li>
          <ListBox>
            {this.props.id}
          </ListBox>
          <ListBox big left>
            {this.props.name}
          </ListBox>
          <ListBox>
            {this.props.price}
          </ListBox>
          <ListBox>
            {this.props.isHeader ? <button onClick={this.props.onCreate}>Add</button> :
              <div><button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button></div>
            }
          </ListBox>
        </li>
    )
  }
} 

export default ProductItem