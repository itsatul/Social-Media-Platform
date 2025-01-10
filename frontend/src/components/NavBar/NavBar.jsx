import SearchIcon from '../../assets/svgs/search_icon.svg'
import { MainContaier } from './styles'
import { LeftContainer } from './styles'
import { RightContainer } from './styles'

export default function NavBar () {
    return (
        <>
        <MainContaier>
         <LeftContainer>
          <img src={SearchIcon} alt="SearchIcon" />
          <input type="text" name="" id="" placeholder='Search posts..' />
        </LeftContainer>
       <RightContainer>
        <button>All</button>
        <button>Liked</button>
        <button>Friends</button>
        <button>Follow</button>
       </RightContainer>
        </MainContaier>
        </>
    )
}