import styled from 'styled-components'

export default styled.section`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;

  & ul {
    list-style: none;
    margin: 0;
    padding: 12px 0;
  }

  & li {
    padding: 12px;
    display:flex;
  }
  & li:first-child {
    text-decoration: underline;
    background-color : coral;
    color: #fff;
  } 
  & li:nth-child(even) {
    background-color: #e9e9e9;
  }
`