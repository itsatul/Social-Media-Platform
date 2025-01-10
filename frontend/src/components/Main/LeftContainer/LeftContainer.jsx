import {Main, MainContainer, Navbar} from "./styles";
import NewPost from "../../../Pages/PostPage/NewPost/NewPost";
import Posts from "../../../Pages/PostPage/Posts/Posts";

export default function LeftContainer() {
    return (
        <MainContainer>
            <Navbar>
                <NewPost/>
            </Navbar>

            <Main>
                <Posts/>
            </Main>
        </MainContainer>
    );
}
