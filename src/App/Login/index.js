import styled from 'styled-components'

export default styled.form`
  width: 40%;
  display:flex;
  flex-direction: column;
  margin: 30px 0;
  & input {
    margin-bottom: 20px;
    font-size: 14px;
    padding: 4px;
    height: 25px;
    padding-left: 10px;
  } 
  & button {
    height: 38px;
    padding-left: 20px;
    padding-right: 20px;
    border: 0;
    color: #fff;
    background-color: #333;
    margin-bottom: 10px;
  }
`