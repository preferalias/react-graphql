import styled from 'styled-components'

export default styled.div`
  flex: ${props => props.big ? "2" : "1"};
  text-align: ${props => props.left ? "left" : "center"};
`