import BotboxBotPartLoginLeftBox from "./bottonPart";
import TopboxBotPartLoginLeftBox from "./TopPart";
import {BotPartLoginLeftBoxStyled} from "../../../style/LeftBox";

export default function BotPartLoginLeftBox() {


    return (
        <BotPartLoginLeftBoxStyled>
            <TopboxBotPartLoginLeftBox/>
            <BotboxBotPartLoginLeftBox/>
        </BotPartLoginLeftBoxStyled>
    );
}
