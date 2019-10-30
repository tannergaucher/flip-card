import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: var(--radius);
  font-family: var(--sans);
  font-size: var(--font-size);
  background: ${props => (props.primary ? 'black' : 'inherit')};
  color: ${props => (props.primary ? 'white' : 'black')};
  text-transform: uppercase;
  width: ${props => (props.fill ? '100%' : '')};
  margin-bottom: 1rem;
`

export default Button
