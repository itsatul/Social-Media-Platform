
import { MainContainer } from "./styles"
import LeftContainer from "./LeftContainer/LeftContainer"
import RightContainer from "./RighContainer/RightContainer"
import NavBar from "../NavBar/NavBar"



export default function Main () {
    return (
        <>
       <NavBar />
        <MainContainer>
             <LeftContainer />
             <RightContainer />
        </MainContainer>
        </>
    )
}