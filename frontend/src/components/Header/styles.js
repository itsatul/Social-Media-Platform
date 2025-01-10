import styled from "styled-components";


export const MainHeader = styled.header`
display: flex;
max-width:100vw;
height: 3rem;
flex-direction: row;


`

export const LeftContainer = styled.div`
display: flex;
flex-grow: 1;
height: 100%;
gap: 10rem;



button {
    border: none;
    background-color: white;
    font-size: 16px;
}

.motionButton {
    font-size: 18px
}


`

export const LogoDiv = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
width: 10%;
gap: 10px;
font-size: 1.1rem;




`

export const NavBar = styled.nav`

width: 90%;
display: flex;
height: 100%;
align-items: center;
justify-content: flex-start;
gap: 6rem;

a{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.active{
    border-bottom: solid 2px purple;

}

`

export const RightContainer = styled.div`
display: flex;
width: 20%;
justify-content: end;
align-items: center;
padding-right: 3rem;
gap: 3rem;
`

