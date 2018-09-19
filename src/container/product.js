import React, { Component } from 'react'
import Wrapper from '../App/Product'
import ProdList from '../components/productlist'
import gql from "graphql-tag"
import {Mutation} from 'react-apollo'

const DELETE_TODO = gql`
mutation DeleteProduct($id: Int!){
  deleteProduct(id: $id){
    error,
    message
  }
}
`
const CREATE_TODO = gql`
  mutation CreateProduct($name: String!, $price: Float!){
    createProduct(name: $name , price: $price) {
      id,
      name,
      price
    }
  }
`
const GET_PRODUCTS = gql`
  {
    allProducts{
      id,
      name,
      price
    }
  }
`
const UPDATE_TODO = gql`
  mutation UpdateProduct($id: Int!, $name: String!, $price: Float!){
    updateProduct(id: $id, name: $name, price: $price) {
      id,
      name,
      price
    }
  }
`

class Products extends Component {
  state = { 
    createToggle : false,
    name: '',
    price: 0,
    updateKey: null,
    deleteKey: null,
   }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  onCreate = () => {
    const { createToggle } = this.state
    this.setState({createToggle: !createToggle })
  }

  render() { 
    return (
    <Mutation 
      mutation={CREATE_TODO}
      update={(cache, {data}) => {
        const { allProducts } = cache.readQuery({ query: GET_PRODUCTS })
        cache.writeQuery({
          query: GET_PRODUCTS,
          data: {allProducts: allProducts.concat(data.createProduct)}
        })
      }}
    >
      {(addCreate, {CreateData}) => {
        return ( 
          <Mutation
            mutation={UPDATE_TODO}
            key={this.state.updateKey}
            >{(addUpdate, {UpdateData}) => (
              <Mutation
                mutation={DELETE_TODO}
                update={(cache, {data}) => {
                  const { allProducts } = cache.readQuery({ query: GET_PRODUCTS })
                  const dataNew = allProducts.filter(prod => prod.id !== this.state.deleteKey)
                  cache.writeQuery({
                    query: GET_PRODUCTS,
                    data: {allProducts: dataNew }
                  })
                }}
                >
                {(addDelete, {DeleteData}) => (
                  <Wrapper>
                    <h1>Product Manager</h1>
                    <hr/>
                    <ProdList 
                      onCreate={this.onCreate} 
                      onDelete={(id) => {
                        this.setState({deleteKey: id})
                        addDelete({variables: {id: id}})
                      }} 
                      onEdit={(id, name, price) => {
                        this.setState({updateKey: id})
                        addUpdate({ variables: { id : id , name: name, price: Number(price) }})
                        console.log(id)                      
                      }}
                      add={this.state.createToggle}
                      name={this.state.name}
                      price={this.state.price}
                      onChange={this.onChange}
                      onCreateConfirm={e => {
                        e.preventDefault()
                        addCreate({ variables: { name: this.state.name, price: Number(this.state.price) }})
                        this.onCreate()
                        this.setState({
                          name: '',
                          price: 0
                        })
                      }}
                    />
                  </Wrapper>
                )}
              </Mutation>
            )
            }
          </Mutation>
        )
      }
     }
    </Mutation>
    )
  }
}
 

export default Products