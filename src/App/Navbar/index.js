import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  overflow: hidden;
  padding: 0px;
  & ul {
    list-style: none;
    margin: 0;
    padding: 12px 0;
  }
  & li {
    display: inline;
  }
  & a {
    color: #fff;
    text-decoration: none;
    padding-right : 15px;
  }
  & a:hover {
    text-decoration: underline;
  }
`