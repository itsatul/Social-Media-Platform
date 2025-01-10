import styled from "styled-components";

export const LoginrightBoxStyled = styled.div`
width: 55%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const TopPartRightBoxStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 100%;
height: 15%;
padding: 1.6rem;
align-items: center;
gap: 1rem;
a {
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  pointer-events: none;
}
`;
export const SignUpButtonWhiteStyled = styled.button`
width: 6rem;
border: solid 1px #dddddd;
background-color: white;
height: 2rem;
border-radius: 1rem;
font-size: 0.5rem;
&:hover{
  background-color: black;
  color: white;
}
`;


export const MidPartRightBoxStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
flex-grow: 1;
align-items: center;
gap: 3rem;
a {
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
}
h1{
  font-size: 2rem;
}
`;
export const InputsBoxStyled = styled.div`
display: flex;
border-bottom: solid 2px #dddddd;

gap: 1rem;
align-items: center;
height: 2rem;
`;
export const InputsBoxInputStyled = styled.input`
all: unset;
background: none;
border: none;
&::placeholder{
  color: #131313;
}
`;
export const InputBoxButtonStyled = styled.img`
width: 1rem;
height: 1rem;
`;

export const BotPartRightBoxStyled = styled.div`
height: 20%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap: 1.5rem;
nav{
  display: flex;
  justify-content: center;
  gap: 1rem;
  a{
  width: 0.6rem;
  height: 0.6rem;
  background-color: white;
  border-radius: 1rem;
  border: solid 1px black;
  pointer-events: none;

}
a.active{
  background-color: black;
}

}



`
export const SINGINButtonStyled = styled.button`
   width: 13rem;
   height: 2.8rem;
   border-radius: 2rem;
   background-color: #683cd1 ;
   border: none;
   font-size: 0.6rem;
   color: white;
   &:hover{
    background-color: pink;
    color: black;
   }
`
