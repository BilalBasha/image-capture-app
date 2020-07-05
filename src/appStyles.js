import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    justify-content: center;
`;

export const Button = styled.button`
  width:100%;
  height:40px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid black;
  margin: 0.2rem;
  background-color: ${props => props.type === "info" ? "#5eafff" : "white"};
  cursor:pointer;
`
export const Input = styled.input.attrs(props => ({
    type: props.type
  }))`
  width:100%;
  height:40px;
  background: transparent;
  border-radius: 5px;
  border: ${props => props.error ? "2px solid #dc3545" : "2px solid black"};
  box-sizing:border-box;
  text-align:center;
  margin: 0.2rem;
  background-color: ${props => props.type === "info" ? "#5eafff" : "white"};
`

export const Link = styled.a`
  color:blue;
  text-decoration:none;
`

export const Header = styled.h2`
 font-size: 1.2em;
 text-align: center;
`

export const WarningButton = styled(Button)`
  color: red;
  border-color: red;
`;

export const Wrapper = styled.div`
  width:100vw;
  padding:10px 50px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 400px;
    box-sizing:border-box;
  }
`