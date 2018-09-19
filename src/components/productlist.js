import React from 'react'
import InputList from '../components/InputList'
import gql from "graphql-tag"
import { Query } from 'react-apollo'
import ProductItem from '../components/productItem'

const GET_PRODUCTS = gql`
  {
    allProducts{
      id,
      name,
      price
    }
  }
`
export default props => (
  <Query query={GET_PRODUCTS}>
    {({loading, error, data}) => {
      if (loading) return "Loading..."
      if (error) return `Error! ${error.message}`

      const onEdit = (id, name, price) =>{
        props.onEdit(id, name, price)
      }

      const onDelete = (id) =>{
        props.onDelete(id)
      }

      return (
        <ul>
          <ProductItem id="ID" name="Product Name" price="Price" isHeader onCreate={props.onCreate}/>
            { props.add ? <InputList {...props} onEdit={props.onCreateConfirm} onCancel={props.onCreate}></InputList> : null }
          {
            data.allProducts.map(prod => (
              <ProductItem 
                key={prod.id} 
                id={prod.id} 
                name={prod.name} 
                price={prod.price} 
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          }
        </ul>
      )
    }} 
  </Query>
)
  
 