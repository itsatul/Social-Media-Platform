import styled from "styled-components";
import { BotdivStyled, SocialIconStyled, SocialLinkStyled } from "../../../../style/LeftBox";

export default function BotboxBotPartLoginLeftBox() {
    
 


    return(
        <BotdivStyled>
        <SocialLinkStyled>
          <SocialIconStyled onClick={()=>window.open('https://x.com/')} src="src\assets\motion-assets\svgs\twitter_icon.svg"></SocialIconStyled>
          <SocialIconStyled onClick={()=>window.open('https://www.facebook.com/?locale=de_DE')} src="src\assets\motion-assets\svgs\facebook_icon.svg"></SocialIconStyled>
          <SocialIconStyled onClick={()=>window.open('https://www.instagram.com/accounts/login/')} src="src\assets\motion-assets\svgs\instagram_icon.svg"></SocialIconStyled>
        </SocialLinkStyled>
        <p>@ Motion 2025. All rights reserved</p>
      </BotdivStyled>

    )
}
