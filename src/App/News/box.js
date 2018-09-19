import styled from 'styled-components'

export default styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 20px;
  margin-top: 20px;
  & img {
    width: 100%;
    box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
  & img:hover {
    transform: scale(1.03);
    transition-duration: 0.5s ;
  }
`